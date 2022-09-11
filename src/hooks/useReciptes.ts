import axios from "axios";
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

  const createRecipte = async (data: FormData, apiUrl: string) => {
    let response: Response;
    try {
      response = await axios.post(`${apiUrl}/reciptes/create`, data);

      if (response.status !== 201) {
        throw new Error();
      }
    } catch (error) {
      return 400;
    }

    return response.status;
  };

  return { getReciptes, createRecipte };
};

export default useReciptes;
