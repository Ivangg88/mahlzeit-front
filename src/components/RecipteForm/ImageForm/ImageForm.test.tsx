import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { preloadStore } from "../../../utils/storePreloadTest";
import ImageForm from "./ImageForm";

describe("Given a componentImagerForm", () => {
  describe("When rendered", () => {
    const recipte = preloadStore.mockProtoRecipte;

    const props = {
      recipte: recipte,
      nextPage: jest.fn(),
      previousPage: jest.fn(),
      submit: jest.fn(),
      createImage: jest.fn(),
    };
    test("Then it should show a form with an input file and a button with the text 'Anterior' and ohter button with the text 'Crear Receta'", () => {
      render(
        <ImageForm
          createImage={props.createImage}
          nextPage={props.nextPage}
          previousPage={props.previousPage}
          recipte={props.recipte}
          submit={props.submit}
        />
      );

      const input = screen.getByLabelText("Añadir imagen:");
      const previousButton = screen.getByRole("button", { name: "Anterior" });
      const createButton = screen.getByRole("button", { name: "Crear Receta" });

      expect(input).toBeInTheDocument();
      expect(previousButton).toBeInTheDocument();
      expect(createButton).toBeInTheDocument();
    });

    describe("And the user click on 'Crear Receta'", () => {
      test("Then it should call the function submit of the form", async () => {
        render(
          <ImageForm
            createImage={props.createImage}
            nextPage={props.nextPage}
            previousPage={props.previousPage}
            recipte={props.recipte}
            submit={props.submit}
          />
        );

        const form = screen.getByTestId("form-recipte") as HTMLElement;
        form.onsubmit = jest.fn();
        const button = screen.getByRole("button", { name: "Crear Receta" });

        await userEvent.click(button);

        expect(form.onsubmit).toHaveBeenCalled();
      });
    });

    describe("And the user click on 'Anterior'", () => {
      test("Then it should call the function previousPage", async () => {
        render(
          <ImageForm
            createImage={props.createImage}
            nextPage={props.nextPage}
            previousPage={props.previousPage}
            recipte={props.recipte}
            submit={props.submit}
          />
        );

        const button = screen.getByRole("button", { name: "Anterior" });

        await userEvent.click(button);

        expect(props.previousPage).toHaveBeenCalled();
      });
    });

    describe("And the user upload a file", () => {
      test("Then it should call the function createImage", async () => {
        render(
          <ImageForm
            createImage={props.createImage}
            nextPage={props.nextPage}
            previousPage={props.previousPage}
            recipte={props.recipte}
            submit={props.submit}
          />
        );

        const input = screen.getByLabelText("Añadir imagen:");

        await userEvent.upload(input, new File([""], ""));

        expect(props.createImage).toHaveBeenCalled();
      });
    });
  });
});
