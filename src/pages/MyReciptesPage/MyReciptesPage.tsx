import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import Layout from "../../components/Layout/Layout";
import ReciptesList from "../../components/ReciptesList/ReciptesList";
import useReciptes from "../../hooks/useReciptes";

const apiUrl = `${process.env.REACT_APP_API_URL}/reciptes/recipesByUser`;

const MyReciptesPage = () => {
  const {
    translations: { emptylist },
  } = useAppSelector((state) => state.i8n);

  const { getReciptesByAuthor } = useReciptes();

  useEffect(() => {
    (async () => {
      getReciptesByAuthor(apiUrl);
    })();
  }, [getReciptesByAuthor]);

  const { recipesList } = useAppSelector((state: RootState) => state.reciptes);

  return (
    <Layout>
      {recipesList.length > 0 ? (
        <ReciptesList reciptes={recipesList} />
      ) : (
        <span>{emptylist}</span>
      )}
    </Layout>
  );
};

export default MyReciptesPage;
