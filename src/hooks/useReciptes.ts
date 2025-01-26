import axios, { AxiosError, AxiosResponse } from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import {
  deleteRecipteActionCreator,
  loadRecipteActionCreator,
  loadRecipteDetailActionCreator,
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
  const user = useAppSelector((state: RootState) => state.user);
  const authConfig = {
    headers: { Authorization: `Bearer ${user.token}` },
  };

  const getReciptes = useCallback(
    async (apiUrl: string) => {
      try {
        dispatch(openLoadingModalActionCreator());

        const {
          data: { reciptes },
        } = await axios.get(`${apiUrl}`);

        dispatch(loadReciptesActionCreator(reciptes));
      } catch (error) {
        navigator("/error");
      } finally {
        dispatch(closeLoadingModalActionCreator());
      }
    },
    [dispatch, navigator]
  );

  const createRecipte = async (data: FormData, apiUrl: string) => {
    try {
      dispatch(openLoadingModalActionCreator());
      const response: AxiosResponse<Recipte> = await axios.post(
        apiUrl,
        data,
        authConfig
      );

      dispatch(loadRecipteActionCreator(response.data));

      navigator("/myreciptes");
    } catch (error: unknown) {
      toast.error(
        (error as AxiosError<{ error: string }>).response?.data.error
      );
    } finally {
      dispatch(closeLoadingModalActionCreator());
    }
  };

  const deleteRecipte = async (id: string, apiUrl: string) => {
    const config = {
      ...authConfig,
      params: { id: id },
    };
    try {
      dispatch(openLoadingModalActionCreator());

      await axios.delete(apiUrl, config);

      dispatch(deleteRecipteActionCreator(id));
    } catch (error) {
      return error;
    } finally {
      dispatch(closeLoadingModalActionCreator());
    }
  };

  const getRecipteById = useCallback(
    async (id: string, apiUrl: string) => {
      try {
        dispatch(openLoadingModalActionCreator());
        const response = await axios.get(`${apiUrl}/${id}`);

        dispatch(loadRecipteDetailActionCreator(response.data.recipte));

        const timeOut = setTimeout(() => {
          dispatch(closeLoadingModalActionCreator());
          clearTimeout(timeOut);
        }, 500);
      } catch (error) {
        dispatch(closeLoadingModalActionCreator());
        return error;
      }
    },
    [dispatch]
  );

  const getReciptesByAuthor = useCallback(
    async (apiUrl: string) => {
      try {
        const config = {
          headers: { Authorization: `Bearer ${user.token}` },
        };
        dispatch(openLoadingModalActionCreator());

        const { data }: AxiosResponse<Recipte[]> = await axios.get(
          `${apiUrl}`,
          config
        );

        const timeOut = setTimeout(() => {
          dispatch(closeLoadingModalActionCreator());
          clearTimeout(timeOut);
        }, 500);

        dispatch(loadReciptesActionCreator(data));
      } catch (error) {
        dispatch(closeLoadingModalActionCreator());
        navigator("/error");
      }
    },
    [dispatch, navigator, user]
  );

  return {
    getReciptes,
    createRecipte,
    deleteRecipte,
    getRecipteById,
    getReciptesByAuthor,
  };
};

export default useReciptes;

// function formDataToObject(formData: FormData): Recipte {
//   // Helper function to get a value from FormData and parse JSON if needed
//   function getValue(key: string, parseJson: boolean = false) {
//     const value = formData.get(key);
//     if (value === null) {
//       return undefined;
//     }
//     return parseJson ? JSON.parse(value as string) : value;
//   }

//   return {
//     name: getValue("name") as string,
//     autor: getValue("autor") as string,
//     dificulty: getValue("dificulty") as string,
//     ingredients: getValue("ingredients", true) as Ingredient[],
//     persons: Number(getValue("persons")),
//     process: getValue("process", true) as Process[],
//     image: getValue("image") as File | string,
//     backupImage: getValue("image") as string,
//     id: new Date().getTime().toString(),
//   };
// }
