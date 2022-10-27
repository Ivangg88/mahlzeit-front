import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testStore";
import CreateReciptePage from "./CreateReciptePage";

describe("Given a componente CreateReciptePage", () => {
  describe("When rendered", () => {
    test("Then it should show a RecipteForm component with the title 'Crea tu receta'", () => {
      const title = "Crea tu receta";

      renderWithProviders(<CreateReciptePage />);

      screen.getByRole("heading", { name: title });
    });
  });
});
