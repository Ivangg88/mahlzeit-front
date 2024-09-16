import { preloadStore } from "../../utils/storePreloadTest";
import renderWithProviders from "../../utils/testStore";
import DetailCard from "./DetailCard";

const mockNavigator = jest.fn();

const item = preloadStore.mockRecipte;
const mockuseRecipte = {
  deleteRecipte: jest.fn(),
  getRecipteById: jest.fn().mockReturnValue(item),
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

jest.mock("../../hooks/useReciptes", () => () => mockuseRecipte);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigator,
}));

const name = "Patatas bravas";
item.name = name;
//Pending  to update

describe("Given a DetalCard", () => {
  test("It should render", () => {
    renderWithProviders(
      <DetailCard recipteDetail={preloadStore.mockRecipte} />
    );
  });
});

/*describe("Given a component DetailCard", () => {
  describe("When rendered and receives by props an item with the name 'Patatas bravas'", () => {
    test("Then it should show a card with a heading with the received name", () => {
      renderWithProviders(<DetailCard />);

      screen.getByRole("heading", { name: item.name });
    });

    test("And if the image src returns an error it should use the backupImage as src", () => {
      renderWithProviders(<DetailCard />);

      const image = screen.getByAltText(name);
      fireEvent.error(image);

      expect(image.getAttribute("src")).toBe(item.backupImage);
    });
  });

  describe("Whent the user click on the icon maximize", () => {
    test("Then it should call the navigator function", () => {
      renderWithProviders(<DetailCard />);

      const button = screen.getAllByRole("button");

      userEvent.click(button[0]);

      expect(mockNavigator).toHaveBeenCalled();
    });
  });

  describe("Whent the user click on the button 'Eliminar'", () => {
    test("Then it should call the deleteRecipte function", async () => {
      renderWithProviders(<DetailCard />);

      const button = screen.getAllByRole("button");

      userEvent.click(button[1]);

      expect(mockDelete.deleteRecipte).toHaveBeenCalled();
    });
  });
});*/
