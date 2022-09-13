import { screen } from "@testing-library/react";
import { Recipte } from "../../types/interfaces";
import renderWithProviders from "../../utils/testStore";
import DetailPage from "./DetailPage";

const mockItems: Recipte[] = [
  {
    id: "Mock id",
    name: "Mock item",
    autor: "Mock autor",
    dificulty: "Difícil",
    image: "url",
    ingredients: "",
    persons: 0,
    process: "",
    backupImage: "",
  },
];

describe("Given a component DetailPage", () => {
  describe("When rendered", () => {
    test("Then it should show a Header and a DetailCard components", () => {
      const title = "Mahlzeit";

      renderWithProviders(<DetailPage />, {
        preloadedState: { reciptes: mockItems },
      });

      const headerTitle = screen.getByRole("heading", { name: title });
      const itemTitle = screen.getByRole("heading", {
        name: mockItems[0].name,
      });

      expect(itemTitle).toBeInTheDocument();
      expect(headerTitle).toBeInTheDocument();
    });
  });
});
