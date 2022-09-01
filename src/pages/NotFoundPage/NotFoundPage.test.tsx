import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given a component NotFoundPage", () => {
  describe("When rendered", () => {
    test("Then it should show a container with the texts 'Error 404' and 'Page not found'", () => {
      const text1 = "Error 404";
      const text2 = "Page not found";

      render(<NotFoundPage />);

      const expectedText1 = screen.getByText(text1);
      const expectedText2 = screen.getByText(text2);

      expect(expectedText1).toBeInTheDocument();
      expect(expectedText2).toBeInTheDocument();
    });
  });
});
