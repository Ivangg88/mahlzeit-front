import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import LoginPage from "./LoginPage";

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

describe("Given a component LoginPage", () => {
  describe("When rendered", () => {
    test("Then it should show a LoginForm component", () => {
      const title = "Login";

      render(<LoginPage />, { wrapper: Wrapper });

      screen.getByRole("heading", { name: title });
    });
  });
});
