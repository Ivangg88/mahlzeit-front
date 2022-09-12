import Header from "../../components/Header/Header";
import ReciptesList from "../../components/ReciptesList/ReciptesList";
import DetailPageStyled from "./DetailPageStyled";

const DetailPage = () => {
  return (
    <DetailPageStyled>
      <Header />
      <ReciptesList />
    </DetailPageStyled>
  );
};

export default DetailPage;
