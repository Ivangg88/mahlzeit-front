import { render, screen } from "@testing-library/react";
import { Item } from "../../types/interfaces";
import ItemCard from "./ItemCard";

describe("Given a component ItemCard", () => {
  describe("When rendered and receives by props an item with the name 'Patatas bravas'", () => {
    test("Then it should show a card with a heading with the received name", () => {
      const name = "Patatas bravas";
      const item: Item = {
        name: name,
        dificulty: "Fácil",
        autor: "",
        id: "",
        image: "",
        ingredients: [],
        persons: 0,
        process: { steps: [] },
      };

      render(<ItemCard item={item} />);

      screen.getByRole("heading", { name: item.name });
    });
  });
});
