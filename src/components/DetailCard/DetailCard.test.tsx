import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Recipte } from "../../types/interfaces";
import renderWithProviders from "../../utils/testStore";
import DetailCard from "./DetailCard";

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
const item: Recipte = {
  name: name,
  dificulty: "Fácil",
  autor: "",
  id: "",
  image: "",
  ingredients: "",
  persons: 0,
  process: "",
  backupImage: "",
};

describe("Given a component DetailCard", () => {
  describe("When rendered and receives by props an item with the name 'Patatas bravas'", () => {
    test("Then it should show a card with a heading with the received name", () => {
      renderWithProviders(<DetailCard item={item} />);

      screen.getByRole("heading", { name: item.name });
    });

    test("And if the image src returns an error it should use the backupImage as src", () => {
      renderWithProviders(<DetailCard item={item} />);

      const image = screen.getByRole("img");
      fireEvent.error(image);

      expect(image.getAttribute("src")).toBe(item.backupImage);
    });
  });

  describe("Whent the user click on the icon maximize", () => {
    test("Then it should call the navigator function", () => {
      renderWithProviders(<DetailCard item={item} />);

      const button = screen.getAllByRole("button");

      userEvent.click(button[0]);

      expect(mockNavigator).toHaveBeenCalled();
    });
  });

  describe("Whent the user click on the button 'Eliminar'", () => {
    test("Then it should call the deleteRecipte function", async () => {
      renderWithProviders(<DetailCard item={item} />);

      const button = screen.getAllByRole("button");

      userEvent.click(button[1]);

      expect(mockDelete.deleteRecipte).toHaveBeenCalled();
    });
  });
});
