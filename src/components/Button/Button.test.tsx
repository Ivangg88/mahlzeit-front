import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a component Button", () => {
  describe("When it receives a 'Crear' text", () => {
    test("Then it should show a text 'Crear' inside", () => {
      const buttonText = "Crear";

      render(<Button type="submit" text={buttonText}></Button>);

      const receivedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(receivedButton).toBeInTheDocument();
    });
  });
});
