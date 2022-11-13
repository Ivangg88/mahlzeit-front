import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { preloadStore } from "../../../utils/storePreloadTest";
import renderWithProviders from "../../../utils/testStore";
import RecipteForm from "../RecipteForm";
import DetailsForm from "./DetailsForm";

describe("Given a component DetailsForm", () => {
  const recipte = preloadStore.mockProtoRecipte;
  const props = {
    recipte: recipte,
    nextPage: jest.fn(),
    previousPage: jest.fn(),
    handleChange: jest.fn(),
  };

  describe("When rendered", () => {
    test("Then it should show a form with 4 inputs, a spinbutton and a button", () => {
      render(
        <DetailsForm
          ingredients={recipte.ingredients}
          setRecipte={() => {}}
          handleChange={props.handleChange}
          nextPage={props.nextPage}
          previousPage={props.previousPage}
          recipte={recipte}
        />
      );

      const inputs = screen.getAllByRole("textbox");
      const unit = screen.getByRole("combobox");
      const spin = screen.getByRole("spinbutton", { name: "Personas:" });
      const button = screen.getByRole("button", { name: "Siguiente" });

      expect(unit).toBeInTheDocument();
      expect(inputs.length).toBe(4);
      expect(spin).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });

    test("Then it should update the input value with the typed data from user.", async () => {
      render(
        <DetailsForm
          ingredients={recipte.ingredients}
          setRecipte={() => {}}
          handleChange={props.handleChange}
          nextPage={props.nextPage}
          previousPage={props.previousPage}
          recipte={recipte}
        />
      );

      const nameInput: HTMLInputElement = screen.getByRole("textbox", {
        name: "Nombre:",
      });
      const dificultyInput: HTMLInputElement = screen.getByRole("textbox", {
        name: "Dificultad:",
      });
      const personsInput: HTMLInputElement = screen.getByRole("spinbutton", {
        name: "Personas:",
      });

      await userEvent.type(nameInput, recipte.name);
      await userEvent.type(dificultyInput, recipte.dificulty);
      await userEvent.type(personsInput, recipte.persons.toString());

      expect(nameInput.value).toBe(recipte.name);
      expect(dificultyInput.value).toBe(recipte.dificulty);
      expect(Number.parseInt(personsInput.value)).toBe(recipte.persons);
    });
  });

  describe("And the user click on 'Siguiente'", () => {
    test("Then it should call the function nextPage", async () => {
      render(
        <DetailsForm
          ingredients={recipte.ingredients}
          setRecipte={() => {}}
          handleChange={props.handleChange}
          nextPage={props.nextPage}
          previousPage={props.previousPage}
          recipte={recipte}
        />
      );

      const button = screen.getByRole("button", { name: "Siguiente" });

      await userEvent.click(button);

      expect(props.nextPage).toHaveBeenCalled();
    });
  });
});
