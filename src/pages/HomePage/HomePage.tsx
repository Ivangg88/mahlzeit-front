import { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import Layout from "../../components/Layout/Layout";
import ReciptesList from "../../components/ReciptesList/ReciptesList";
import useReciptes from "../../hooks/useReciptes";
import { Recipte } from "../../types/interfaces";
import Pagination from "../../components/Pagination/Pagination";

const HomePage = () => {
  const { recipesList } = useAppSelector((state: RootState) => state.reciptes);
  const { translations } = useAppSelector((state: RootState) => state.i8n);
  const apiUrl = `${process.env.REACT_APP_API_URL}/reciptes/getAll`;
  const { getReciptes } = useReciptes();
  const [currentPage, setCurrentPage] = useState(1);

  const getPaginatedData = (
    arrayToPaginate: Array<Recipte>,
    currentPage: number,
    pageSize: number
  ) => {
    if (!arrayToPaginate || arrayToPaginate.length === 0) {
      return { paginatedArray: [], paginationText: "", totalPages: 0 };
    }

    const actualPage = Math.max(1, currentPage);
    const totalElements = arrayToPaginate.length;
    const startIndex = (actualPage - 1) * pageSize;
    const totalPages = Math.ceil(arrayToPaginate.length / pageSize);
    const endIndex = startIndex + pageSize;
    const paginatedArray = arrayToPaginate.slice(startIndex, endIndex);
    const paginationText = `${startIndex + 1} - ${Math.min(
      endIndex,
      totalElements
    )} ${translations.pagination.from} ${totalElements} ${
      translations.pagination.results
    }`;

    return { paginatedArray, paginationText, totalPages };
  };

  useEffect(() => {
    (async () => {
      await getReciptes(apiUrl);
    })();
  }, [getReciptes, apiUrl]);

  const { paginatedArray, paginationText, totalPages } = getPaginatedData(
    recipesList,
    currentPage,
    5
  );
  return (
    <Layout>
      <ReciptesList reciptes={paginatedArray} />
      {paginatedArray.length > 0 ? (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          paginationText={paginationText}
        />
      ) : (
        <></>
      )}
    </Layout>
  );
};

export default HomePage;
