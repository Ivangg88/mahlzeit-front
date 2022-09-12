import { useEffect } from "react";
import Header from "../../components/Header/Header";
import ReciptesList from "../../components/ReciptesList/ReciptesList";
import useReciptes from "../../hooks/useReciptes";
import HomePageStyled from "./HomePageStyled";

const HomePage = () => {
  const apiUrl = `${process.env.REACT_APP_API_URL}/reciptes/getAll`;
  const { getReciptes } = useReciptes();

  useEffect(() => {
    (async () => {
      await getReciptes(apiUrl);
    })();
  }, [getReciptes, apiUrl]);

  return (
    <HomePageStyled>
      <Header />
      <ReciptesList />
    </HomePageStyled>
  );
};

export default HomePage;
