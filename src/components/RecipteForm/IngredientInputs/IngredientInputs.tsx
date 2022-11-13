import { Ingredient } from "../../../types/interfaces";
import Button from "../../Button/Button";
import { IngredientInputsStyled } from "./IngredientInputsStyled";

interface IngredientInputsProps {
  ingredients: Ingredient[];
  handleFormChange: (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleSelect: (
    index: number,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;

  addInputField: () => void;
  deleteInputField: () => void;
}

export const IngredientInputs = ({
  ingredients,
  handleFormChange,
  handleSelect,
  addInputField,
  deleteInputField,
}: IngredientInputsProps): JSX.Element => {
  const inputs = ingredients.map((ingredient, index) => {
    return (
      <>
        <li key={index}>
          <div className="ingredient">
            <input
              autoComplete="off"
              className="ingredient__name ingredient__input"
              name="name"
              placeholder={`Ingrediente ${index + 1}`}
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
        </li>
      </>
    );
  });

  return (
    <IngredientInputsStyled>
      <label className="label">Ingredientes:</label>
      {inputs}
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
    </IngredientInputsStyled>
  );
};
