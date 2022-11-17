import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import Header from "../../components/Header/Header";
import ReciptesList from "../../components/ReciptesList/ReciptesList";
import useReciptes from "../../hooks/useReciptes";
import HomePageStyled from "./HomePageStyled";

const HomePage = () => {
  const apiUrl = `${process.env.REACT_APP_API_URL}/reciptes/getAll`;
  const { getReciptes } = useReciptes();
  const reciptes = useAppSelector((state: RootState) => state.reciptes);

  useEffect(() => {
    (async () => {
      await getReciptes(apiUrl);
    })();
  }, [getReciptes, apiUrl]);

  return (
    <HomePageStyled>
      <Header />
      <ReciptesList reciptes={reciptes} />
    </HomePageStyled>
  );
};

export default HomePage;
