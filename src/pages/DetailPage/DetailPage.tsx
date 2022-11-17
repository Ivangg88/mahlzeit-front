import DetailCard from "../../components/DetailCard/DetailCard";
import Header from "../../components/Header/Header";
import DetailPageStyled from "./DetailPageStyled";

const DetailPage = () => {
  return (
    <DetailPageStyled>
      <Header />
      <DetailCard />
    </DetailPageStyled>
  );
};

export default DetailPage;
