import { screen } from "@testing-library/react";

import renderWithProviders from "../../utils/testStore";
import LoginPage from "./LoginPage";

describe("Given a component LoginPage", () => {
  describe("When rendered", () => {
    test("Then it should show a LoginForm component", () => {
      const title = "Login";
      const navigateTarget = "/";

      renderWithProviders(<LoginPage navigateTarget={navigateTarget} />);

      screen.getByRole("heading", { name: title });
    });
  });
});
