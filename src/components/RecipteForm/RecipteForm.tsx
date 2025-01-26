import { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import useReciptes from "../../hooks/useReciptes";
import { Ingredient, ProtoRecipte } from "../../types/interfaces";
import DetailsForm from "./DetailsForm/DetailsForm";
import FormularBanner from "./FormularBanner/FormularBanner";
import ImageForm from "./ImageForm/ImageForm";
import ProcessForm from "./ProcessForm/ProcessForm";

const RecipteForm = (): JSX.Element => {
  const initialRecipte: ProtoRecipte = {
    name: "",
    autor: "",
    dificulty: "",
    image: "",
    ingredients: [
      {
        name: "",
        quantity: "",
        unit: "",
      },
    ],
    persons: 0,
    process: [{ process: "", picture: "", backupPicture: "" }],
    authorId: "",
  };

  const apiUrl = `${process.env.REACT_APP_API_URL}/reciptes/create`;
  const [recipte, setRecipte] = useState<ProtoRecipte>(initialRecipte);
  const [currentPage, setPage] = useState<number>(1);

  const { createRecipte } = useReciptes();
  const user = useAppSelector((state) => state.user);

  const nextPage = () => {
    setPage(currentPage + 1);
  };

  const previousPage = () => {
    setPage(currentPage - 1);
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
  formData.append("ingredients", JSON.stringify(recipte.ingredients));
  formData.append("persons", recipte.persons.toString());
  formData.append("process", JSON.stringify(recipte.process));

  const submit = (event: React.FormEvent<HTMLFormElement>, url: string) => {
    event.preventDefault();
    createRecipte(formData, url);
  };

  const selectedPage = (currentPage: number): JSX.Element => {
    switch (currentPage) {
      case 1:
        return (
          <DetailsForm
            ingredients={recipte.ingredients as Ingredient[]}
            setRecipte={setRecipte}
            handleChange={addDataFromInputs}
            recipte={recipte}
            nextPage={nextPage}
            previousPage={previousPage}
          />
        );

      case 2:
        return (
          <ProcessForm
            recipte={recipte}
            setRecipte={setRecipte}
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

  return (
    <>
      {selectedPage(currentPage)}{" "}
      <FormularBanner currentPage={currentPage} pages={3} />
    </>
  );
};

export default RecipteForm;
