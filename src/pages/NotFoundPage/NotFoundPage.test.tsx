import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

describe("Given a component NotFoundPage", () => {
  describe("When rendered with a error false", () => {
    test("Then it should show a container with the texts 'Error 404' and 'Page not found'", () => {
      const text1 = "Error 404";
      const text2 = "Página no encontrada";

      render(
        <BrowserRouter>
          <NotFoundPage error={false} />
        </BrowserRouter>
      );

      const expectedText1 = screen.getByText(text1);
      const expectedText2 = screen.getByText(text2);

      expect(expectedText1).toBeInTheDocument();
      expect(expectedText2).toBeInTheDocument();
    });
  });

  describe("When rendered with a error true", () => {
    test("Then it should show a container with the texts 'Error 404' and 'Page not found'", () => {
      const text1 = "Error general";
      const text2 = "No se encuentra el recurso";

      render(
        <BrowserRouter>
          <NotFoundPage error={true} />
        </BrowserRouter>
      );

      const expectedText1 = screen.getByText(text1);
      const expectedText2 = screen.getByText(text2);

      expect(expectedText1).toBeInTheDocument();
      expect(expectedText2).toBeInTheDocument();
    });
  });
});
