import Header from "../../components/Header/Header";
import ReciptesList from "../../components/ReciptesList/ReciptesList";
import HomePageStyled from "./HomePageStyled";

const HomePage = () => {
  return (
    <HomePageStyled>
      {" "}
      <Header />
      <ReciptesList />
    </HomePageStyled>
  );
};

export default HomePage;
