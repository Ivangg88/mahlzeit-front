import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterForm from "./RegisterForm";

describe("Given a RegisterForm component", () => {
  const userName = "Cristina";
  const userEmail = "cristina@mail.com";
  const userPassword = "12345678";

  describe("When rendered", () => {
    test("Then it should show a form with 4 inputs and 1 button", async () => {
      const expectedUserText = "Cristina";
      const expectedNameText = "cristina@mail.com";
      const expectedPasswordText = "min 8 caracteres";
      const expectedPasswordConfirmText = "confirmar contraseña";
      const expectedButtonText = "Crear perfil";

      render(<RegisterForm />);

      const formTestPlaceHolders: HTMLInputElement[] = [
        screen.getByPlaceholderText(expectedUserText),
        screen.getByPlaceholderText(expectedNameText),
        screen.getByPlaceholderText(expectedPasswordText),
        screen.getByPlaceholderText(expectedPasswordConfirmText),
        screen.getByRole("button", {
          name: expectedButtonText,
        }),
      ];

      formTestPlaceHolders.forEach((placeholder) =>
        expect(placeholder).toBeInTheDocument()
      );
    });

    test("Then it should update the input value with the typed data from user.", async () => {
      render(<RegisterForm />);

      const nameInput: HTMLInputElement = screen.getByLabelText("Nombre:");
      const emailInput: HTMLInputElement = screen.getByLabelText("Email:");
      const passwordInput: HTMLInputElement =
        screen.getByLabelText("Contraseña:");
      const passwordConfirmInput: HTMLInputElement = screen.getByLabelText(
        "Confirmar contraseña:"
      );

      await userEvent.type(nameInput, userName);
      await userEvent.type(emailInput, userEmail);
      await userEvent.type(passwordInput, userPassword);
      await userEvent.type(passwordConfirmInput, userPassword);

      expect(nameInput.value).toBe(userName);
      expect(emailInput.value).toBe(userEmail);
      expect(passwordInput.value).toBe(userPassword);
      expect(passwordConfirmInput.value).toBe(userPassword);
    });
  });

  describe("And user click on register button", () => {
    test("Then it should be submit", async () => {
      render(<RegisterForm />);

      const form = screen.getByTestId("form-register") as HTMLElement;
      form.onsubmit = jest.fn();
      const button = screen.getByRole("button");

      await userEvent.click(button);

      expect(form.onsubmit).toHaveBeenCalled();
    });
  });
});
