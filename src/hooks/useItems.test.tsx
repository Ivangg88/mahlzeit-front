import { renderHook } from "@testing-library/react";
import { loadItemsActionCreator } from "../store/item/itemSlice";
import { Item } from "../types/interfaces";
import useItems from "./useItems";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a hook useItems", () => {
  describe("When the function getAll is called with an url", () => {
    const apiUrl = `${process.env.REACT_APP_API_URL}/items/getAll`;
    test("Then it should call the dispatch with a loadItemsActionCreator with an array of items as payload", async () => {
      const items: Item[] = [
        {
          id: "",
          name: "Mock item",
          dificulty: "Fácil",
          autor: "",
          persons: 0,
          image: "",
          ingredients: [],
          process: { steps: [] },
        },
      ];

      const {
        result: {
          current: { getItems },
        },
      } = renderHook(useItems);

      await getItems(apiUrl);

      expect(mockDispatch).toHaveBeenCalledWith(loadItemsActionCreator(items));
    });

    describe("And receives a bad response", () => {
      test("Then it should trhow a error", async () => {
        global.fetch = jest.fn().mockResolvedValue([]);

        const {
          result: {
            current: { getItems },
          },
        } = renderHook(useItems);

        const error = await getItems(apiUrl);

        expect(error).toBeInstanceOf(Error);
      });
    });
  });
});
