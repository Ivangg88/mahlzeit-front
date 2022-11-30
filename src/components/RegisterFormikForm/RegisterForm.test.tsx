import { screen } from "@testing-library/react";
import renderWithFormik from "../../utils/formikTest";
import RegisterFormikForm from "./RegisterFormikForm";
describe("Given a RegisterFormikForm component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show 5 inputs and the register button", () => {
      const labelUser = "Nombre";
      const labelPassword = "Contraseña";
      const labelRepeatPassword = "Confirmar contraseña";
      const labelEmail = "Email";
      const labelRepeatEmail = "Confirmar email";
      const buttonText = "Crear perfil";

      renderWithFormik(<RegisterFormikForm />);

      const inputUser = screen.getByLabelText(labelUser);
      const inputPassword = screen.getByLabelText(labelPassword);
      const inputRepeatPassword = screen.getByLabelText(labelRepeatPassword);
      const inputEmail = screen.getByLabelText(labelEmail);
      const inputRepeatEmail = screen.getByLabelText(labelRepeatEmail);
      const button = screen.getByRole("button");

      expect(inputUser).toBeInTheDocument();
      expect(inputPassword).toBeInTheDocument();
      expect(inputRepeatPassword).toBeInTheDocument();
      expect(inputEmail).toBeInTheDocument();
      expect(inputRepeatEmail).toBeInTheDocument();
      expect(button).toHaveTextContent(buttonText);
    });

    test("And a text with a link to navigate to login", () => {
      const textAccount = "¿Ya registrado?";
      const linkText = "Click aquí para login";
      renderWithFormik(<RegisterFormikForm />);

      const text = screen.getByText(textAccount);
      const link = screen.getByRole("link");

      expect(text).toBeInTheDocument();
      expect(link).toHaveTextContent(linkText);
    });
  });
});
