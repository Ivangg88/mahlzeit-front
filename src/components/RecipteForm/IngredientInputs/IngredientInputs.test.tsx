import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Ingredient } from "../../../types/interfaces";
import { preloadStore } from "../../../utils/storePreloadTest";
import renderWithProviders from "../../../utils/testStore";
import { IngredientInputs } from "./IngredientInputs";

describe("Given a component IngredientInputs", () => {
  describe("When rendered", () => {
    test("Then it should show a fomr", () => {
      const ingredients: Ingredient[] = new Array(1).fill(
        preloadStore.mockProtoRecipte.ingredients[0]
      );
      const mockFunction = jest.fn();

      renderWithProviders(
        <IngredientInputs
          addInputField={mockFunction}
          deleteInputField={mockFunction}
          handleFormChange={mockFunction}
          handleSelect={mockFunction}
          ingredients={ingredients}
        />
      );

      const nameInput = screen.getByPlaceholderText("Ingrediente 1");
      const quantityInput = screen.getByPlaceholderText("Cantidad");
      const unitsOption = screen.getByRole("combobox");

      userEvent.type(nameInput, "m");
      userEvent.type(quantityInput, "5");
      userEvent.selectOptions(unitsOption, ["ml"]);

      expect(mockFunction).toHaveBeenCalledTimes(3);
    });
  });
});
