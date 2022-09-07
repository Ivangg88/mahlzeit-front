import { render, screen } from "@testing-library/react";
import { Item } from "../../types/interfaces";
import Wrapper from "../../utils/Wrapper";
import ItemList from "./ItemList";

const mockItems: Item[] = [
  {
    id: "Mock id",
    name: "Mock item",
    autor: "Mock autor",
    dificulty: "Difícil",
    image: "url",
    ingredients: [],
    persons: 0,
    process: { steps: [] },
  },
  {
    id: "Mock id 2",
    name: "Mock item 2",
    autor: "Mock autor 2",
    dificulty: "Difícil",
    image: "url 2",
    ingredients: [],
    persons: 0,
    process: { steps: [] },
  },
];
jest.mock("../../app/hooks", () => ({
  ...jest.requireActual("../../app/hooks"),
  useAppSelector: () => mockItems,
}));

afterEach(() => {
  jest.resetAllMocks();
});

describe("Given a component ItemList", () => {
  describe("When rendered", () => {
    test("Then it should show too many ItemCards as elements has the array of items", () => {
      render(<ItemList />, { wrapper: Wrapper });

      const expectedElements = screen.getAllByTestId("test-list");

      expect(expectedElements.length).toBe(mockItems.length);
    });
  });
});
