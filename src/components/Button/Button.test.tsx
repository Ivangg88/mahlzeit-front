import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import styledMainTheme from "../../styles/styledMainTheme";
import Button from "./Button";

describe("Given a component Button", () => {
  describe("When it receives a 'Crear' text", () => {
    test("Then it should show a text 'Crear' inside", () => {
      const buttonText = "Crear";

      render(
        <ThemeProvider theme={styledMainTheme}>
          {" "}
          <Button type="submit" text={buttonText}></Button>
        </ThemeProvider>
      );

      const receivedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(receivedButton).toBeInTheDocument();
    });
  });
});
