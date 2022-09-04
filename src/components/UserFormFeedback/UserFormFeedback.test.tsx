import { render, screen } from "@testing-library/react";
import UserFormFeedback from "./UserFormFeedback";

describe("Given a component UserFormFeedback", () => {
  describe("When rendered and given the props true and 'Las contraseñas no coinciden'", () => {
    test("The it should show an element with the given text", () => {
      render(
        <UserFormFeedback isActive={true} text="Las contraseñas no coinciden" />
      );

      const receivedElement = screen.getByText("Las contraseñas no coinciden");

      expect(receivedElement).toBeInTheDocument();
    });
  });

  describe("When rendered and receives the props false and 'Las contraseñas no coinciden'", () => {
    test("Then it should create a hidden element whit the given text.", () => {
      render(
        <UserFormFeedback
          isActive={false}
          text="Las contraseñas no coinciden"
        />
      );

      const receivedElement = screen.getByText("Las contraseñas no coinciden");

      expect(receivedElement).toBeInTheDocument();
    });
  });
});
