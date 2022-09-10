import { useCallback } from "react";
import { useAppDispatch } from "../app/hooks";
import { loadReciptesActionCreator } from "../store/recipte/recipteSlice";
import { Recipte } from "../types/interfaces";

const useReciptes = () => {
  const dispatch = useAppDispatch();

  const getReciptes = useCallback(
    async (apiUrl: string) => {
      try {
        const response = await fetch(apiUrl);
        const items: Recipte[] = await response.json();

        dispatch(loadReciptesActionCreator(items));
      } catch (error) {
        return error;
      }
    },
    [dispatch]
  );

  return { getItems: getReciptes };
};

export default useReciptes;
