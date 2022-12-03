import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testStore";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When rendered with a title as children", () => {
    test("Then it should render the children", () => {
      const title = <h1>Test</h1>;

      renderWithProviders(<Layout children={title} />);
      const test = screen.getByText("Test");

      expect(test).toBeInTheDocument();
    });
  });
});
