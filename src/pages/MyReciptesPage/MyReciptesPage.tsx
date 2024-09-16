import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import Layout from "../../components/Layout/Layout";
import ReciptesList from "../../components/ReciptesList/ReciptesList";
import { openLoadingModalActionCreator } from "../../store/ui/uiSlice";
import useReciptes from "../../hooks/useReciptes";

const MyReciptesPage = () => {
  const { getReciptes } = useReciptes();
  useEffect(() => {
    (async () => {
      getReciptes("");
    })();
  }, [getReciptes]);
  const { recipesList } = useAppSelector((state: RootState) => state.reciptes);
  const user = useAppSelector((state: RootState) => state.user);

  const dispatch = useAppDispatch();

  dispatch(openLoadingModalActionCreator);
  const myReciptes = recipesList.filter(
    (recipte) => recipte.autor === user.userName
  );

  return (
    <Layout>
      {myReciptes.length > 0 ? (
        <ReciptesList reciptes={myReciptes} />
      ) : (
        <span>No tienes recetas</span>
      )}
    </Layout>
  );
};

export default MyReciptesPage;
