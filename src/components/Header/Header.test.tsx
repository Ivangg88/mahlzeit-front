import { screen } from "@testing-library/react";
import { setupStore } from "../../app/store";
import renderWithProviders from "../../utils/testStore";
import Header from "./Header";

const mockUser = {
  userName: "Mock user",
  token: "1a2b3c4d",
  isLogged: true,
};
const mockDispatch = jest.fn();

beforeAll(() => () => {
  jest.mock("../../app/hooks", () => ({
    ...jest.requireActual("../../app/hooks"),
    useAppDispatch: mockDispatch,
  }));
});

setupStore({ user: mockUser });
describe("Given a component Header", () => {
  describe("When rendered", () => {
    test("Then it should show a header with a title 'Mahlzeit' and 4 links", () => {
      const title = "Mahlzeit";

      renderWithProviders(<Header />);

      const links = screen.getAllByRole("link");
      const heading = screen.getByRole("heading", { name: title });

      expect(heading).toBeInTheDocument();
      expect(links.length).toBe(4);
    });
  });

  describe("When the user is logged", () => {
    test("Then it should show a link with the text 'Login'", () => {
      renderWithProviders(<Header />, {
        preloadedState: { user: { ...mockUser, isLogged: false } },
      });
      const link = screen.getByRole("link", { name: "Login" });

      expect(link).toBeInTheDocument();
    });
  });
});
