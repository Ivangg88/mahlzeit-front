import { useCallback } from "react";
import { useAppDispatch } from "../app/hooks";
import { loadItemsActionCreator } from "../store/item/itemSlice";
import { Item } from "../types/interfaces";

const useItems = () => {
  const dispatch = useAppDispatch();

  const getItems = useCallback(
    async (apiUrl: string) => {
      try {
        const response = await fetch(apiUrl);
        const items: Item[] = await response.json();

        dispatch(loadItemsActionCreator(items));
      } catch (error) {
        return error;
      }
    },
    [dispatch]
  );

  return { getItems };
};

export default useItems;
