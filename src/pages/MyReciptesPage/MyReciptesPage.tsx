import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import Header from "../../components/Header/Header";
import ReciptesList from "../../components/ReciptesList/ReciptesList";
import { openLoadingModalActionCreator } from "../../store/ui/uiSlice";
import HomePageStyled from "./MyReciptesPageStyled";

const MyReciptesPage = () => {
  const reciptes = useAppSelector((state: RootState) => state.reciptes);
  const user = useAppSelector((state: RootState) => state.user);

  const dispatch = useAppDispatch();

  dispatch(openLoadingModalActionCreator);
  const myReciptes = reciptes.filter(
    (recipte) => recipte.autor === user.userName
  );

  return (
    <HomePageStyled>
      <Header />
      {myReciptes.length > 0 ? (
        <ReciptesList reciptes={myReciptes} />
      ) : (
        <span>No tienes recetas</span>
      )}
    </HomePageStyled>
  );
};

export default MyReciptesPage;
