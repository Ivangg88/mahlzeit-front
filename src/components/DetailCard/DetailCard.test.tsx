import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Recipte } from "../../types/interfaces";
import Wrapper from "../../utils/Wrapper";
import RecipteCard from "./DetailCard";

describe("Given a component DetailCard", () => {
  describe("When rendered and receives by props an item with the name 'Patatas bravas'", () => {
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
    test("Then it should show a card with a heading with the received name", () => {
      render(
        <BrowserRouter>
          <RecipteCard item={item} />
        </BrowserRouter>,
        { wrapper: Wrapper }
      );

      screen.getByRole("heading", { name: item.name });
    });

    test("And if the image src returns an error it should use the backupImage as src", () => {
      render(
        <BrowserRouter>
          <RecipteCard item={item} />
        </BrowserRouter>,
        { wrapper: Wrapper }
      );

      const image = screen.getByRole("img");
      fireEvent.error(image);

      expect(image.getAttribute("src")).toBe(item.backupImage);
    });
  });
});
