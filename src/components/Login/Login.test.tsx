import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Wrapper from "../../utils/Wrapper";
import Login from "./Login";

describe("Given a Login components", () => {
  describe("When it's instantiated", () => {
    test("Then it should show two inputs where the user can write and a button", async () => {
      const navigateTarget = "/test";
      const inputUserText = "Nombre";
      const inputPasswordText = "Contraseña";
      const userWrite = "John Doe";
      const passwordWrite = "123123";

      render(<Login navigateTarget={navigateTarget} />, { wrapper: Wrapper });

      const inputUser = screen.getByLabelText(inputUserText);
      const inputPassword = screen.getByLabelText(inputPasswordText);
      const button = screen.getByRole("button");

      await userEvent.type(inputUser, userWrite);
      await userEvent.type(inputPassword, passwordWrite);

      expect(button).toBeInTheDocument();
      expect(inputUser).toHaveValue(userWrite);
      expect(inputPassword).toHaveValue(passwordWrite);
    });
  });
});
