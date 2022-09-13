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

        setTimeout(() => dispatch(closeLoadingModalActionCreator()), 1000);
      } catch (error) {
        failModal("Error cargando los datos.");
      }
    },
    [dispatch]
  );

  const createRecipte = async (data: FormData, apiUrl: string) => {
    try {
      dispatch(openLoadingModalActionCreator());
      const response: AxiosResponse<Recipte> = await axios.post(apiUrl, data);

      if (response.status !== 200) {
        throw new Error();
      }

      dispatch(loadRecipteActionCreator(response.data));
      setTimeout(() => dispatch(closeLoadingModalActionCreator()), 1000);
      navigator("/home");
    } catch (error) {
      return 400;
    }
  };

  const deleteRecipte = async (id: string, apiUrl: string) => {
    const config = {
      params: { id: id },
    };
    try {
      dispatch(openLoadingModalActionCreator());
      const response = await axios.delete(apiUrl, config);

      if (response.status !== 201) {
        throw new Error();
      }

      dispatch(deleteRecipteActionCreator(id));
      setTimeout(() => dispatch(closeLoadingModalActionCreator()), 1000);
      navigator("/home");
    } catch (error) {
      return error;
    }
  };

  const getRecipteById = async (id: string, apiUrl: string) => {
    try {
      dispatch(openLoadingModalActionCreator());
      const response = await axios.get(`${apiUrl}/${id}`);

      if (response.status !== 200) {
        throw new Error();
      }

      dispatch(loadReciptesActionCreator([response.data.recipte]));
      setTimeout(() => dispatch(closeLoadingModalActionCreator()), 1000);
      navigator("/detail");
    } catch (error) {
      return error;
    }
  };

  return { getReciptes, createRecipte, deleteRecipte, getRecipteById };
};

export default useReciptes;
