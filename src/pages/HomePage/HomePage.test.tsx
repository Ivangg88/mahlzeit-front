import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testStore";

import HomePage from "./HomePage";

describe("Given a component HomePage", () => {
  describe("When rendered", () => {
    test("Then it should show a Header component", () => {
      const title = "Mahlzeit";

      renderWithProviders(<HomePage />);

      const heading = screen.getByRole("heading", { name: title });

      expect(heading).toBeInTheDocument();
    });
  });
});
