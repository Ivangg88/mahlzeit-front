import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import Layout from "../../components/Layout/Layout";
import ReciptesList from "../../components/ReciptesList/ReciptesList";
import useReciptes from "../../hooks/useReciptes";

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
    <Layout>
      <ReciptesList reciptes={reciptes} />
    </Layout>
  );
};

export default HomePage;
