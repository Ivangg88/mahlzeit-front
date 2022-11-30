import { screen } from "@testing-library/react";
import renderWithFormik from "../../utils/formikTest";
import LoginFormikForm from "./LoginFormikForm";

describe("Given a LoginFormikForm component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show 2 inputs and the login button", () => {
      const labelUser = "Nombre";
      const labelPassword = "Contraseña";
      const buttonText = "Entrar";

      renderWithFormik(<LoginFormikForm />);

      const inputUser = screen.getByLabelText(labelUser);
      const inputPassword = screen.getByLabelText(labelPassword);
      const button = screen.getByRole("button");

      expect(inputUser).toBeInTheDocument();
      expect(inputPassword).toBeInTheDocument();
      expect(button).toHaveTextContent(buttonText);
    });

    test("And a text with a link to navigate to register", () => {
      const textAccount = "¿Aún no registrado?";
      const linkText = "Click aquí para registro";
      renderWithFormik(<LoginFormikForm />);

      const text = screen.getByText(textAccount);
      const link = screen.getByRole("link");

      expect(text).toBeInTheDocument();
      expect(link).toHaveTextContent(linkText);
    });
  });
});
