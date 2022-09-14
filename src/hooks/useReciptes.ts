import axios, { AxiosResponse } from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { failModal } from "../modals/modals";
import {
  deleteRecipteActionCreator,
  loadRecipteActionCreator,
  loadReciptesActionCreator,
} from "../store/recipte/recipteSlice";
import {
  closeLoadingModalActionCreator,
  openLoadingModalActionCreator,
} from "../store/ui/uiSlice";
import { Recipte } from "../types/interfaces";

const useReciptes = () => {
  const dispatch = useAppDispatch();
  const navigator = useNavigate();

  const getReciptes = useCallback(
    async (apiUrl: string) => {
      try {
        dispatch(openLoadingModalActionCreator());
        const response = await fetch(apiUrl);

        const { reciptes } = await response.json();

        dispatch(loadReciptesActionCreator(reciptes));
      } catch (error) {
        dispatch(closeLoadingModalActionCreator());
        navigator("/error");
      }
    },
    [dispatch, navigator]
  );

  const createRecipte = async (data: FormData, apiUrl: string) => {
    try {
      dispatch(openLoadingModalActionCreator());
      const response: AxiosResponse<Recipte> = await axios.post(apiUrl, data);

      dispatch(loadRecipteActionCreator(response.data));

      navigator("/home");
    } catch (error) {
      dispatch(closeLoadingModalActionCreator());
      failModal("Error cargado los datos");
    }
  };

  const deleteRecipte = async (id: string, apiUrl: string) => {
    const config = {
      params: { id: id },
    };
    try {
      dispatch(openLoadingModalActionCreator());

      await axios.delete(apiUrl, config);

      dispatch(deleteRecipteActionCreator(id));
      navigator("/home");
    } catch (error) {
      dispatch(closeLoadingModalActionCreator());
      failModal("Error cargado los datos");
      return error;
    }
  };

  const getRecipteById = useCallback(
    async (id: string, apiUrl: string) => {
      try {
        dispatch(openLoadingModalActionCreator());
        const response = await axios.get(`${apiUrl}/${id}`);

        dispatch(loadReciptesActionCreator([response.data.recipte]));
      } catch (error) {
        dispatch(closeLoadingModalActionCreator());
        failModal("Error cargado los datos");
        return error;
      }
    },
    [dispatch]
  );

  return { getReciptes, createRecipte, deleteRecipte, getRecipteById };
};

export default useReciptes;
