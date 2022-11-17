import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testStore";
import MyReciptesPage from "./MyReciptesPage";

describe("Given a component MyReciptesPage", () => {
  describe("When rendered", () => {
    test("Then it should show a Header component", () => {
      const title = "Mahlzeit";

      renderWithProviders(<MyReciptesPage />);

      const heading = screen.getByRole("heading", { name: title });

      expect(heading).toBeInTheDocument();
    });
  });
});
