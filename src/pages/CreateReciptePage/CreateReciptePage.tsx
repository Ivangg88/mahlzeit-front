import Header from "../../components/Header/Header";
import RecipteForm from "../../components/RecipteForm/RecipteForm";
import CreateReciptePageStyled from "./CreateReciptePageStyled";

const CreateReciptePage = () => {
  return (
    <CreateReciptePageStyled>
      <Header />
      <RecipteForm />
    </CreateReciptePageStyled>
  );
};

export default CreateReciptePage;
