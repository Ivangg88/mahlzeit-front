import { Item } from "../../types/interfaces";
import { itemReducer, loadItemsActionCreator } from "./itemSlice";

describe("Given a loadItemsActionCreator", () => {
  describe("When is called", () => {
    test("Then it should return an action with the type item/loadItems", () => {
      const actionType = "item/loadItems";
      const newItem: Item = {
        id: "",
        name: "",
        dificulty: "Medio",
        autor: "",
        image: "",
        persons: 0,
        ingredients: [],
        process: { steps: [] },
      };

      const expectedAction = {
        type: actionType,
        payload: [newItem],
      };

      const action = loadItemsActionCreator([newItem]);

      expect(action).toStrictEqual(expectedAction);
    });
  });
});

describe("Given a itemReducer function", () => {
  describe("When is called with an action type 'item/loadItems' and a payload with an item", () => {
    test("Then it should return a copy of the loaded items", () => {
      const items: Item[] = [
        {
          id: "",
          name: "",
          dificulty: "Medio",
          autor: "",
          image: "",
          persons: 0,
          ingredients: [],
          process: { steps: [] },
        },
      ];

      const action = loadItemsActionCreator(items);

      const receivedItems = itemReducer(items, action);

      expect(receivedItems).toStrictEqual(items);
    });
  });
});
