import { Recipte } from "../../types/interfaces";
import {
  reciptesReducer,
  loadReciptesActionCreator,
  loadRecipteActionCreator,
  deleteRecipteActionCreator,
} from "./recipteSlice";

describe("Given a loadReciptesActionCreator", () => {
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

describe("Given a loadRecipteActionCreator", () => {
  describe("When is called", () => {
    test("Then it should return an action with the type recipte/loadRecipte", () => {
      const actionType = "recipte/loadRecipte";
      const recipte: Recipte = {
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
        payload: recipte,
      };

      const action = loadRecipteActionCreator(recipte);

      expect(action).toStrictEqual(expectedAction);
    });
  });
});

describe("Given a reciptesReducer function", () => {
  describe("When is called with an action type 'recipte/loadReciptes' and a payload with an item", () => {
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

  describe("When is called with an action type 'recipte/deleteREcipte' and a payload with an id", () => {
    test("Then it should delete the given recipte", () => {
      const items: Recipte[] = [
        {
          id: "Mock id",
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

      const action = deleteRecipteActionCreator(items[0].id);

      const receivedItems = reciptesReducer(items, action);

      expect(receivedItems.length).toBe(0);
    });
  });
});
