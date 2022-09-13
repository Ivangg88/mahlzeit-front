import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Recipte } from "../../types/interfaces";
import Wrapper from "../../utils/Wrapper";
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

jest.mock("../../app/hooks", () => ({
  ...jest.requireActual("../../app/hooks"),
  useAppSelector: () => mockItems,
}));

describe("Given a component DetailPage", () => {
  describe("When rendered", () => {
    test("Then it should show a Header and a DetailCard components", () => {
      const title = "Mahlzeit";

      render(
        <BrowserRouter>
          <DetailPage />
        </BrowserRouter>,
        { wrapper: Wrapper }
      );

      const headerTitle = screen.getByRole("heading", { name: title });
      const itemTitle = screen.getByRole("heading", {
        name: mockItems[0].name,
      });

      expect(itemTitle).toBeInTheDocument();
      expect(headerTitle).toBeInTheDocument();
    });
  });
});
