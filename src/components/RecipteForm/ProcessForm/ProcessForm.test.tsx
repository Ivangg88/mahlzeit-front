import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProtoRecipte } from "../../../types/interfaces";
import { preloadStore } from "../../../utils/storePreloadTest";
import ProcessForm from "./ProcessForm";

describe("Given a component ProcessForm", () => {
  const recipte: ProtoRecipte = preloadStore.mockProtoRecipte;

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
          nextPage={props.nextPage}
          previousPage={props.previousPage}
          recipte={recipte}
          setRecipte={jest.fn()}
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
          nextPage={props.nextPage}
          previousPage={props.previousPage}
          recipte={recipte}
          setRecipte={jest.fn()}
        />
      );

      const processInput: HTMLInputElement = screen.getByRole("textbox");

      await userEvent.type(processInput, recipte.process[0].process);

      expect(processInput.value).toBe(recipte.process[0].process);
    });

    describe("And the user click on 'Siguiente'", () => {
      test("Then it should call the function nextPage", async () => {
        render(
          <ProcessForm
            nextPage={props.nextPage}
            previousPage={props.previousPage}
            recipte={recipte}
            setRecipte={jest.fn()}
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
            nextPage={props.nextPage}
            previousPage={props.previousPage}
            recipte={recipte}
            setRecipte={jest.fn()}
          />
        );

        const button = screen.getByRole("button", { name: "Anterior" });

        await userEvent.click(button);

        expect(props.previousPage).toHaveBeenCalled();
      });
    });
  });
});
