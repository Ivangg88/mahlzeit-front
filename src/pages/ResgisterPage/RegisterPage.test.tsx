import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import RegisterPage from "./RegisterPage";

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

describe("Given a componente RegisterPage", () => {
  describe("When rendered", () => {
    test("Then it should show a REgisterForm component", () => {
      const title = "Crea tu perfil";

      render(<RegisterPage />, { wrapper: Wrapper });

      screen.getByRole("heading", { name: title });
    });
  });
});
