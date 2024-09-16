import { useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
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
  const {
    translations: {
      recipeForm: {
        createRecipe,
        name,
        namePlaceholder,
        difficulty,
        difficultyPlaceholder,
        persons,
        personsPlaceholder,
        nextButton,
      },
    },
  } = useAppSelector((state: RootState) => state.i8n);

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
      <h1 className="recipte-form__title">{createRecipe}</h1>

      <ul className="recipte-form__inputs-container">
        <li className="recipte-form__input-field">
          <label htmlFor="name" className="label">
            {name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={recipte.name}
            className="recipte-form__input"
            placeholder={namePlaceholder}
            onChange={(event) => handleChange(event)}
          />
        </li>

        <li className="recipte-form__input-field">
          <label htmlFor="dificulty" className="label">
            {difficulty}
          </label>
          <input
            id="dificulty"
            name="dificulty"
            type="text"
            value={recipte.dificulty}
            className="recipte-form__input"
            placeholder={difficultyPlaceholder}
            onChange={(event) => handleChange(event)}
          />
        </li>

        <li className="recipte-form__input-field">
          <label htmlFor="persons" className="label">
            {persons}
          </label>
          <input
            id="persons"
            name="persons"
            type="number"
            inputMode="numeric"
            value={recipte.persons}
            className="recipte-form__input"
            placeholder={personsPlaceholder}
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
          <Button type="button" text={nextButton} actionOnClick={nextPage} />
        </div>
      </ul>
    </DetailsFormStyled>
  );
};

export default DetailsForm;
