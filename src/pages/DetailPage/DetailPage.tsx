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
  return (
    <DetailPageStyled>
      <Header />
      <DetailCard />
    </DetailPageStyled>
  );
};

export default DetailPage;
