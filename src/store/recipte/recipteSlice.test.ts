import { Recipte } from "../../types/interfaces";
import { reciptesReducer, loadReciptesActionCreator } from "./recipteSlice";

describe("Given a loadREciptesActionCreator", () => {
  describe("When is called", () => {
    test("Then it should return an action with the type recipte/loadReciptes", () => {
      const actionType = "recipte/loadReciptes";
      const newItem: Recipte = {
        id: "",
        name: "",
        dificulty: "Medio",
        autor: "",
        image: "",
        persons: 0,
        ingredients: "",
        process: "",
        backupImage: "",
      };

      const expectedAction = {
        type: actionType,
        payload: [newItem],
      };

      const action = loadReciptesActionCreator([newItem]);

      expect(action).toStrictEqual(expectedAction);
    });
  });
});

describe("Given a itemReducer function", () => {
  describe("When is called with an action type 'item/loadItems' and a payload with an item", () => {
    test("Then it should return a copy of the loaded items", () => {
      const items: Recipte[] = [
        {
          id: "",
          name: "",
          dificulty: "Medio",
          autor: "",
          image: "",
          persons: 0,
          ingredients: "",
          process: "",
          backupImage: "",
        },
      ];

      const action = loadReciptesActionCreator(items);

      const receivedItems = reciptesReducer(items, action);

      expect(receivedItems).toStrictEqual(items);
    });
  });
});
