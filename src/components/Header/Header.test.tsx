import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Given a component Header", () => {
  describe("When rendered", () => {
    test("Then it should show a header with a title 'Mahlzeit' and 4 links", () => {
      const title = "Mahlzeit";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );

      const heading = screen.getByRole("heading", { name: title });

      expect(heading).toBeInTheDocument();
    });
  });
});
