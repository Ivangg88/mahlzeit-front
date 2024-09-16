import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import DetailCard from "../../components/DetailCard/DetailCard";
import Layout from "../../components/Layout/Layout";
import { useEffect } from "react";
import useReciptes from "../../hooks/useReciptes";

const DetailPage = () => {
  const { recipeDetail } = useAppSelector((state: RootState) => state.reciptes);
  const { getRecipteById } = useReciptes();

  const { id } = useParams();
  const urlId = `${process.env.REACT_APP_API_URL}/reciptes/getById`;

  useEffect(() => {
    getRecipteById(id ?? "", urlId);
  }, [id, getRecipteById, urlId]);
  return (
    <Layout>
      <DetailCard recipteDetail={recipeDetail} />
    </Layout>
  );
};

export default DetailPage;
