import { screen } from "@testing-library/react";
import { Recipte } from "../../types/interfaces";
import renderWithProviders from "../../utils/testStore";

import ReciptesList from "./ReciptesList";

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
  {
    id: "Mock id 2",
    name: "Mock item 2",
    autor: "Mock autor 2",
    dificulty: "Difícil",
    image: "url 2",
    ingredients: "",
    process: "",
    backupImage: "",
    persons: 0,
  },
];

describe("Given a component ItemList", () => {
  describe("When rendered", () => {
    test("Then it should show too many ItemCards as elements has the array of items", () => {
      renderWithProviders(<ReciptesList />, {
        preloadedState: { reciptes: mockItems },
      });

      const expectedElements = screen.getAllByTestId("test-list");

      expect(expectedElements.length).toBe(mockItems.length);
    });
  });
});
