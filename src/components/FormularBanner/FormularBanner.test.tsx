import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testStore";
import FormularBanner from "./FormularBanner";

describe("Given a component FormulaBanner", () => {
  describe("When rendered and receives the current page", () => {
    test("Then it should show a banner with 3 spans", () => {
      renderWithProviders(<FormularBanner currentPage={1} />);

      const span = screen.getByText("1");

      expect(span).toBeInTheDocument();
    });
  });
});
