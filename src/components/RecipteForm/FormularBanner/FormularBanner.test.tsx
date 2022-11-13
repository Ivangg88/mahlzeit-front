import { screen } from "@testing-library/react";
import renderWithProviders from "../../../utils/testStore";
import FormularBanner from "./FormularBanner";

describe("Given a component FormulaBanner", () => {
  describe("When rendered and receives 3 as value of pages", () => {
    test("Then it should show a banner with 3 span element", () => {
      const pages = 3;

      renderWithProviders(<FormularBanner currentPage={1} pages={pages} />);

      const span = screen.getAllByRole("note");

      expect(span.length).toBe(3);
    });
  });
});
