import { useCallback } from "react";
import { useAppDispatch } from "../app/hooks";
import { loadReciptesActionCreator } from "../store/recipte/recipteSlice";

const useReciptes = () => {
  const dispatch = useAppDispatch();

  const getReciptes = useCallback(
    async (apiUrl: string) => {
      try {
        const response = await fetch(apiUrl);
        const { reciptes } = await response.json();

        dispatch(loadReciptesActionCreator(reciptes));
      } catch (error) {
        return error;
      }
    },
    [dispatch]
  );

  return { getItems: getReciptes };
};

export default useReciptes;
