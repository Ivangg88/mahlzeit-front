import { render, screen } from "@testing-library/react";
import RegisterPage from "./RegisterPage";

describe("Given a componente RegisterPage", () => {
  describe("When rendered", () => {
    test("Then it should show a REgisterForm component", () => {
      const title = "Crea tu perfil";

      render(<RegisterPage />);

      screen.getByRole("heading", { name: title });
    });
  });
});
