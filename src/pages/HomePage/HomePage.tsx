import Header from "../../components/Header/Header";
import ItemList from "../../components/ItemList/ItemList";
import HomePageStyled from "./HomePageStyled";

const HomePage = () => {
  return (
    <HomePageStyled>
      {" "}
      <Header />
      <ItemList />
    </HomePageStyled>
  );
};

export default HomePage;
