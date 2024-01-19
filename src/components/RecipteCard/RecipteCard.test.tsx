import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { preloadStore } from "../../utils/storePreloadTest";
import renderWithProviders from "../../utils/testStore";
import RecipteCard from "./RecipteCard";

const mockNavigator = jest.fn();

const mockDelete = {
  deleteRecipte: jest.fn(),
};

jest.mock("../../hooks/useReciptes", () => () => mockDelete);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigator,
}));

const name = "Patatas bravas";
const item = preloadStore.mockRecipte;
item.name = name;

describe("Given a component ItemCard", () => {
  describe("When rendered and receives by props an item with the name 'Patatas bravas'", () => {
    test("Then it should show a card with a heading with the received name", () => {
      renderWithProviders(<RecipteCard item={item} />);

      screen.getByRole("heading", { name: item.name });
    });
  });

  describe("Whent the user click on the icon maximize", () => {
    test("Then it should call the navigator function", () => {
      renderWithProviders(<RecipteCard item={item} />);

      const button = screen.getAllByRole("button");

      userEvent.click(button[0]);

      expect(mockNavigator).toHaveBeenCalled();
    });
  });

  describe("Whent the user click on the button 'Eliminar'", () => {
    test("Then it should call the deleteRecipte function", async () => {
      renderWithProviders(<RecipteCard item={item} />);

      const button = screen.getAllByRole("button");

      userEvent.click(button[0]);

      expect(mockDelete.deleteRecipte).toHaveBeenCalled();
    });
  });
});
