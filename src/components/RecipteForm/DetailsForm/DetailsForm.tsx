import { Ingredient, ProtoRecipte } from "../../../types/interfaces";
import Button from "../../Button/Button";
import { IngredientInputs } from "../IngredientInputs/IngredientInputs";
import DetailsFormStyled from "./DetailsFormStyled";

interface IngredientsFromProps {
  recipte: ProtoRecipte;
  ingredients: Ingredient[];
  setRecipte: React.Dispatch<React.SetStateAction<ProtoRecipte>>;
  nextPage: () => void;
  previousPage: () => void;
  handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const DetailsForm = ({
  ingredients,
  setRecipte,
  handleChange,
  recipte,
  nextPage,
  previousPage,
}: IngredientsFromProps): JSX.Element => {
  const handleFormChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let data = [...ingredients];

    switch (event.target.name) {
      case "name":
        data[index].name = event.target.value;
        break;

      case "quantity":
        data[index].quantity = event.target.value;
        break;

      default:
        break;
    }
    setRecipte({ ...recipte, ingredients: data });
  };

  const handleSelect = (
    index: number,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    let data = [...ingredients];
    data[index].unit = event.target.value;
    setRecipte({ ...recipte, ingredients: data });
  };

  const addInputField = () => {
    setRecipte({
      ...recipte,
      ingredients: (recipte.ingredients as Ingredient[]).concat({
        name: "",
        quantity: "",
        unit: "",
      }),
    });
  };

  const deleteInputField = () => {
    if (recipte.ingredients.length === 1) {
      return;
    }
    const inputFields = ingredients.slice(0, ingredients.length - 1);
    setRecipte({ ...recipte, ingredients: inputFields });
  };

  return (
    <DetailsFormStyled
      data-testid="form-recipt"
      className="recipte-form"
      autoComplete="off"
    >
      <h1 className="recipte-form__title">Crea tu receta</h1>

      <ul className="recipte-form__inputs-container">
        <li className="recipte-form__input-field">
          <label htmlFor="name" className="label">
            Nombre:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={recipte.name}
            className="recipte-form__input"
            placeholder="Alcachofas con jamón"
            onChange={(event) => handleChange(event)}
          />
        </li>

        <li className="recipte-form__input-field">
          <label htmlFor="dificulty" className="label">
            Dificultad:
          </label>
          <input
            id="dificulty"
            name="dificulty"
            type="text"
            value={recipte.dificulty}
            className="recipte-form__input"
            placeholder="Dificultad"
            onChange={(event) => handleChange(event)}
          />
        </li>

        <li className="recipte-form__input-field">
          <label htmlFor="persons" className="label">
            Personas:
          </label>
          <input
            id="persons"
            name="persons"
            type="number"
            inputMode="numeric"
            value={recipte.persons}
            className="recipte-form__input"
            placeholder="4"
            onChange={(event) => handleChange(event)}
          />
        </li>

        <li>
          <IngredientInputs
            ingredients={recipte.ingredients}
            handleFormChange={handleFormChange}
            handleSelect={handleSelect}
            addInputField={addInputField}
            deleteInputField={deleteInputField}
          />
        </li>

        <div className="button-container">
          <Button type="button" text="Siguiente" actionOnClick={nextPage} />
        </div>
      </ul>
    </DetailsFormStyled>
  );
};

export default DetailsForm;
