import { Ingredient, ProtoRecipte } from "../../../types/interfaces";
import Button from "../../Button/Button";
import FormularBanner from "../../FormularBanner/FormularBanner";
import IngredientsFormStyled from "./IngredientsFormStyled";

interface IngredientsFromProps {
  recipte: ProtoRecipte;
  ingredients: Ingredient[];
  setRecipte: React.Dispatch<React.SetStateAction<ProtoRecipte>>;
  nextPage: (currentPage: number) => void;
  previousPage: (currentPage: number) => void;
  handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const IngredientsForm = ({
  ingredients,
  setRecipte,
  handleChange,
  recipte,
  nextPage,
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
    const inputFields = ingredients.slice(0, ingredients.length - 1);
    setRecipte({ ...recipte, ingredients: inputFields });
  };

  const recipteInputs = ingredients.map((ingredient, index) => {
    return (
      <>
        <div className="ingredient" key={index}>
          <input
            autoComplete="off"
            className="ingredient__name ingredient__input"
            name="name"
            placeholder="Ingrediente"
            value={ingredient.name}
            onChange={(event) => handleFormChange(index, event)}
          />

          <input
            autoComplete="off"
            className="ingredient__quantity ingredient__input"
            name="quantity"
            placeholder="Cantidad"
            value={ingredient.quantity}
            onChange={(event) => handleFormChange(index, event)}
          />

          <select
            className="ingredient__unit ingredient__input"
            onChange={(event) => handleSelect(index, event)}
            value={ingredient.unit}
          >
            <option value="select"></option>
            <option value="ml">ml</option>
            <option value="l">l</option>
            <option value="g">g</option>
            <option value="Kg">Kg</option>
            <option value="ud">ud</option>
            <option value="uds">uds</option>
          </select>
        </div>
      </>
    );
  });

  return (
    <IngredientsFormStyled
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
            value={recipte.persons}
            className="recipte-form__input"
            placeholder="4"
            onChange={(event) => handleChange(event)}
          />
        </li>

        <li>
          <form className="recipte-form__ingredients" autoComplete="off">
            <label className="label">Ingredientes:</label>
            {recipteInputs}
          </form>

          <div className="buttons">
            <Button
              customStyle="buttons--small"
              text="+"
              type="button"
              actionOnClick={addInputField}
            />

            <Button
              customStyle="buttons--small"
              text="-"
              type="button"
              actionOnClick={deleteInputField}
            />
          </div>
        </li>

        <li>
          <div className="button-container">
            <Button
              type="button"
              text="Siguiente"
              actionOnClick={() => {
                nextPage(1);
              }}
            />
          </div>

          <div className="recipte-form__banner">
            <FormularBanner currentPage={1} />
          </div>
        </li>
      </ul>
    </IngredientsFormStyled>
  );
};

export default IngredientsForm;
