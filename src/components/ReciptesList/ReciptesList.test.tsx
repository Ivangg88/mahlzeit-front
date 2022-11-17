import { screen } from "@testing-library/react";
import { Recipte } from "../../types/interfaces";
import { preloadStore } from "../../utils/storePreloadTest";
import renderWithProviders from "../../utils/testStore";

import ReciptesList from "./ReciptesList";

const mockItems: Recipte[] = [preloadStore.mockRecipte];

describe("Given a component ItemList", () => {
  describe("When rendered", () => {
    test("Then it should show too many ItemCards as elements has the array of items", () => {
      renderWithProviders(
        <ReciptesList reciptes={[preloadStore.mockRecipte]} />,
        {}
      );

      const expectedElements = screen.getAllByTestId("test-list");

      expect(expectedElements.length).toBe(mockItems.length);
    });
  });
});
