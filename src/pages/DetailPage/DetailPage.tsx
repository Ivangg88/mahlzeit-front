import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import DetailCard from "../../components/DetailCard/DetailCard";
import Header from "../../components/Header/Header";
import useReciptes from "../../hooks/useReciptes";
import DetailPageStyled from "./DetailPageStyled";
const urlId = `${process.env.REACT_APP_API_URL}/reciptes/getById`;

const DetailPage = () => {
  const { id } = useParams();

  const { getRecipteById } = useReciptes();

  useEffect(() => {
    (async () => {
      await getRecipteById(id!, urlId);
    })();
  }, [getRecipteById, id]);

  const items = useAppSelector((state: RootState) => state.reciptes);

  return (
    <DetailPageStyled>
      <Header />
      <DetailCard item={items[0]} />
    </DetailPageStyled>
  );
};

export default DetailPage;
