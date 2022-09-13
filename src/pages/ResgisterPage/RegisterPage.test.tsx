import { screen } from "@testing-library/react";

import renderWithProviders from "../../utils/testStore";
import RegisterPage from "./RegisterPage";

describe("Given a componente RegisterPage", () => {
  describe("When rendered", () => {
    test("Then it should show a RegisterForm component", () => {
      const title = "Crea tu perfil";

      renderWithProviders(<RegisterPage />);

      screen.getByRole("heading", { name: title });
    });
  });
});
