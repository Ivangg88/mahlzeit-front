import { render, screen } from "@testing-library/react";
import { Recipte } from "../../types/interfaces";
import RecipteCard from "./RecipteCard";

describe("Given a component ItemCard", () => {
  describe("When rendered and receives by props an item with the name 'Patatas bravas'", () => {
    test("Then it should show a card with a heading with the received name", () => {
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

      render(<RecipteCard item={item} />);

      screen.getByRole("heading", { name: item.name });
    });
  });
});
