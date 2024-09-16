import { Recipte } from "../../types/interfaces";
import { preloadStore } from "../../utils/storePreloadTest";
import {
  reciptesReducer,
  loadReciptesActionCreator,
  loadRecipteActionCreator,
  deleteRecipteActionCreator,
} from "./recipteSlice";

const newItem = preloadStore.mockRecipte;
const items: Recipte[] = [newItem];
const mockState = { recipesList: items, recipeDetail: newItem };

describe("Given a loadReciptesActionCreator", () => {
  describe("When is called", () => {
    test("Then it should return an action with the type recipte/loadReciptes", () => {
      const actionType = "recipte/loadReciptes";
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

      const expectedAction = {
        type: actionType,
        payload: newItem,
      };

      const action = loadRecipteActionCreator(newItem);

      expect(action).toStrictEqual(expectedAction);
    });
  });
});

describe("Given a reciptesReducer function", () => {
  describe("When is called with an action type 'recipte/loadReciptes' and a payload with an item", () => {
    test("Then it should return a copy of the loaded items", () => {
      const action = loadReciptesActionCreator(items);

      const receivedItems = reciptesReducer(mockState, action);

      expect(receivedItems).toStrictEqual(items);
    });
  });

  describe("When is called with an action type 'recipte/deleteREcipte' and a payload with an id", () => {
    test("Then it should delete the given recipte", () => {
      const action = deleteRecipteActionCreator(newItem.id);

      const receivedItems = reciptesReducer(mockState, action);

      expect(receivedItems.recipesList.length).toBe(0);
    });
  });
});
