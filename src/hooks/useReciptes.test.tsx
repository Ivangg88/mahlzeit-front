import { renderHook } from "@testing-library/react";
import { create } from "domain";
import { BrowserRouter } from "react-router-dom";
import {
  deleteRecipteActionCreator,
  loadRecipteActionCreator,
  loadReciptesActionCreator,
} from "../store/recipte/recipteSlice";
import { Recipte } from "../types/interfaces";
import Wrapper from "../utils/Wrapper";
import useReciptes from "./useReciptes";

const mockDispatch = jest.fn();
const mockNavigate = jest.fn();

jest.mock("../app/hooks", () => ({
  ...jest.requireActual("../app/hooks"),
  useAppDispatch: () => mockDispatch,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a hook useReciptes", () => {
  describe("When the function getAll is called with an url", () => {
    const apiUrl = `${process.env.REACT_APP_API_URL}/reciptes/getAll`;
    test("Then it should call the dispatch with a loadReciptesActionCreator with an array of items as payload", async () => {
      const items: Recipte[] = [
        {
          id: "Mock id",
          name: "Mock item",
          dificulty: "Fácil",
          autor: "",
          persons: 0,
          image: "",
          ingredients: "",
          process: "",
          backupImage: "",
        },
      ];

      const {
        result: {
          current: { getReciptes },
        },
      } = renderHook(useReciptes, {
        wrapper: Wrapper,
      });

      await getReciptes(apiUrl);

      expect(mockDispatch).toHaveBeenCalledWith(
        loadReciptesActionCreator(items)
      );
    });

    describe("And receives a bad response", () => {
      test("Then it should trhow a error", async () => {
        global.fetch = jest.fn().mockResolvedValue([]);

        const {
          result: {
            current: { getReciptes },
          },
        } = renderHook(useReciptes, { wrapper: Wrapper });

        const error = await getReciptes(apiUrl);

        expect(error).toBeInstanceOf(Error);
      });
    });
  });

  describe("When the function delete is called with an id", () => {
    const apiUrl = `${process.env.REACT_APP_API_URL}/reciptes/delete`;
    test("Then it should call the method dispatch", async () => {
      const id = "test-id";
      const {
        result: {
          current: { deleteRecipte },
        },
      } = renderHook(useReciptes, { wrapper: Wrapper });

      await deleteRecipte(id, apiUrl);

      expect(mockDispatch).toHaveBeenCalledWith(deleteRecipteActionCreator(id));
    });
  });

  describe("When its called with an empty id", () => {
    const apiUrl = `${process.env.REACT_APP_API_URL}/reciptes/delete`;
    test("Then it should response an instance of error", async () => {
      const id = "";
      global.fetch = jest.fn().mockResolvedValue([]);

      const {
        result: {
          current: { deleteRecipte },
        },
      } = renderHook(useReciptes, { wrapper: Wrapper });

      const error = await deleteRecipte(id, apiUrl);

      expect(error).toBeInstanceOf(Error);
    });
  });
});
