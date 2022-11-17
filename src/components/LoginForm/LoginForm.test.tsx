import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../utils/testStore";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  const userName = "Cristina";
  const userPassword = "12345678";
  const navigateTarget = "/";

  describe("When rendered", () => {
    test("Then it should show a form with 2 inputs and 1 button", async () => {
      const expectedUserText = "Cristina";
      const expectedPasswordText = "min 8 caracteres";
      const expectedButtonText = "Entrar";

      renderWithProviders(<LoginForm navigateTarget={navigateTarget} />);

      const formTestPlaceHolders: HTMLInputElement[] = [
        screen.getByPlaceholderText(expectedUserText),
        screen.getByPlaceholderText(expectedPasswordText),
        screen.getByRole("button", {
          name: expectedButtonText,
        }),
      ];

      formTestPlaceHolders.forEach((placeholder) =>
        expect(placeholder).toBeInTheDocument()
      );
    });

    test("Then it should update the input value with the typed data from user.", async () => {
      renderWithProviders(<LoginForm navigateTarget={navigateTarget} />);

      const nameInput: HTMLInputElement = screen.getByLabelText("Nombre:");
      const passwordInput: HTMLInputElement =
        screen.getByLabelText("Contraseña:");

      await userEvent.type(nameInput, userName);
      await userEvent.type(passwordInput, userPassword);

      expect(nameInput.value).toBe(userName);
      expect(passwordInput.value).toBe(userPassword);
    });
  });

  describe("And user click on register button", () => {
    test("Then it should be submit", async () => {
      renderWithProviders(<LoginForm navigateTarget={navigateTarget} />);

      const form = screen.getByTestId("form-login") as HTMLElement;
      form.onsubmit = jest.fn();
      const button = screen.getByRole("button");

      await userEvent.click(button);

      expect(form.onsubmit).toHaveBeenCalled();
    });
  });
});
