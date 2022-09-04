import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import LoginForm from "./LoginForm";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

let Wrapper: ({ children }: WrapperProps) => JSX.Element;

beforeEach(() => {
  Wrapper = ({ children }: WrapperProps): JSX.Element => {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  };
});

describe("Given a LoginForm component", () => {
  const userName = "Cristina";
  const userPassword = "12345678";

  describe("When rendered", () => {
    test("Then it should show a form with 2 inputs and 1 button", async () => {
      const expectedUserText = "Cristina";
      const expectedPasswordText = "min 8 caracteres";
      const expectedButtonText = "Entrar";

      render(<LoginForm />, { wrapper: Wrapper });

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
      render(<LoginForm />, { wrapper: Wrapper });

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
      render(<LoginForm />, { wrapper: Wrapper });

      const form = screen.getByTestId("form-login") as HTMLElement;
      form.onsubmit = jest.fn();
      const button = screen.getByRole("button");

      await userEvent.click(button);

      expect(form.onsubmit).toHaveBeenCalled();
    });
  });
});
