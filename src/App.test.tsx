import { screen } from "@testing-library/react";
import App from "./App";
import renderWithProviders from "./utils/testStore";

describe("Given a component App", () => {
  describe("When rendered without a logged user", () => {
    test("It should show the component Header with the link 'Login'", () => {
      renderWithProviders(<App />);

      const link = screen.getByRole("link", { name: "Login" });

      expect(link).toBeInTheDocument();
    });
  });

  describe("When rendered with a logged user", () => {
    test("It should show the component Header with a link 'Logout'", () => {
      renderWithProviders(<App />, {
        preloadedState: {
          user: { token: "", userName: "", isLogged: true, id: "" },
        },
      });

      const link = screen.getByRole("link", { name: "Logout" });

      expect(link).toBeInTheDocument();
    });
  });
});
