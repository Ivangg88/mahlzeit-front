import { getByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProtoRecipte } from "../../../types/interfaces";
import ProcessForm from "./ProcessForm";

describe("Given a component ProcessForm", () => {
  const recipte: ProtoRecipte = {
    autor: "Mock autor",
    dificulty: "Mock dificulty",
    image: " Mock image",
    ingredients: "Mock ingredients",
    name: " Mock name",
    persons: 4,
    process: "Mock process",
  };

  const props = {
    recipte: recipte,
    nextPage: jest.fn(),
    previousPage: jest.fn(),
    handleChange: jest.fn(),
  };
  describe("When rendered", () => {
    test("Then it should show a form with a text input and 2 buttons", () => {
      render(
        <ProcessForm
          handleChange={props.handleChange}
          nextPage={props.nextPage}
          previousPage={props.previousPage}
          recipte={recipte}
        />
      );

      const input = screen.getByRole("textbox");
      const previousButton = screen.getByRole("button", { name: "Anterior" });
      const nextButton = screen.getByRole("button", { name: "Siguiente" });

      expect(input).toBeInTheDocument();
      expect(previousButton).toBeInTheDocument();
      expect(nextButton).toBeInTheDocument();
    });

    test("Then it should update the input value with the typed data from user.", async () => {
      render(
        <ProcessForm
          handleChange={props.handleChange}
          nextPage={props.nextPage}
          previousPage={props.previousPage}
          recipte={recipte}
        />
      );

      const processInput: HTMLInputElement = screen.getByRole("textbox");

      await userEvent.type(processInput, recipte.process);

      expect(processInput.value).toBe(recipte.process);
    });

    describe("And the user click on 'Siguiente'", () => {
      test("Then it should call the function nextPage", async () => {
        render(
          <ProcessForm
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

    describe("And the user click on 'Anterior'", () => {
      test("Then it should call the function previousPage", async () => {
        render(
          <ProcessForm
            handleChange={props.handleChange}
            nextPage={props.nextPage}
            previousPage={props.previousPage}
            recipte={recipte}
          />
        );

        const button = screen.getByRole("button", { name: "Anterior" });

        await userEvent.click(button);

        expect(props.previousPage).toHaveBeenCalled();
      });
    });
  });
});
