import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import useReciptes from "../../hooks/useReciptes";
import { ProtoRecipte } from "../../types/interfaces";
import ImageForm from "./ImageForm/ImageForm";
import IngredientsForm from "./IngredientsForm/IngredientsForm";
import ProcessForm from "./ProcessForm/ProcessForm";

const RecipteForm = (): JSX.Element => {
  const initialRecipte: ProtoRecipte = {
    name: "",
    autor: "",
    dificulty: "",
    image: "",
    ingredients: "",
    persons: 0,
    process: "",
  };

  const apiUrl = `${process.env.REACT_APP_API_URL}/reciptes/create`;
  const [recipte, setRecipte] = useState<ProtoRecipte>(initialRecipte);
  const [currentPage, setPage] = useState<number>(1);
  const [ingredientFields, setIngredientFields] = useState([1, 1]);
  const { createRecipte } = useReciptes();
  const user = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const nextPage = (page: number) => {
    page += 1;
    setPage(page);
  };

  const previousPage = (page: number) => {
    page -= 1;
    setPage(page);
  };

  const addDataFromInputs = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setRecipte({ ...recipte, [event.target.name]: event.target.value });
  };

  const formData = new FormData();

  const createImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    formData.append("file", file);
  };

  formData.append("name", recipte.name);
  formData.append("autor", user.userName);
  formData.append("dificulty", recipte.dificulty);
  formData.append("ingredients", recipte.ingredients);
  formData.append("persons", recipte.persons as string);
  formData.append("process", recipte.process);

  const submit = (event: React.FormEvent<HTMLFormElement>, url: string) => {
    event.preventDefault();
    createRecipte(formData, url);
    navigate("/home");
  };

  const addIngredientField = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    setIngredientFields(ingredientFields.concat(1));
  };

  const deleteIngredientField = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    if (ingredientFields.length === 1) {
      return;
    }
    setIngredientFields(ingredientFields.slice(0, ingredientFields.length - 1));
  };

  switch (currentPage) {
    case 1:
      return (
        <IngredientsForm
          deleteIngredientField={deleteIngredientField}
          addIngredientField={addIngredientField}
          recipteFields={ingredientFields}
          handleChange={addDataFromInputs}
          recipte={recipte}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      );

    case 2:
      return (
        <ProcessForm
          handleChange={addDataFromInputs}
          recipte={recipte}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      );

    case 3:
      return (
        <ImageForm
          createImage={createImage}
          recipte={recipte}
          nextPage={nextPage}
          previousPage={previousPage}
          submit={(event) => submit(event, apiUrl)}
        />
      );

    default:
      break;
  }
  return <h1>Error formulario no encontrado</h1>;
};

export default RecipteForm;
