import { useAppDispatch } from "../app/hooks";
import axios, { AxiosResponse } from "axios";
import { loginUserActionCreator } from "../store/user/userSlice";
import {
  TokenResponse,
  User,
  UserLoged,
  UserLogin,
  UserRegister,
} from "../types/interfaces";
import decodeToken from "../utils/authorization";
import { useNavigate } from "react-router-dom";
import { failModal, sucessModal } from "../modals/modals";

const useUsers = () => {
  const dispatch = useAppDispatch();
  const navigator = useNavigate();

  const sendUserToAPI = async (user: UserRegister, apiUrl: string) => {
    let response: Response;
    const userRegister: User = {
      email: user.email,
      password: user.password,
      userName: user.userName,
    };
    try {
      response = await axios.post(`${apiUrl}/users/register`, userRegister);
      sucessModal(`Usuario ${user.userName} registrado correctamente`);
    } catch (error) {
      failModal("Problema al registrar usuario.");
      return 400;
    }

    navigator("/login");

    return response.status;
  };

  const loginUser = async (
    user: UserLogin,
    apiUrl: string,
    navigateTarget: string
  ) => {
    try {
      const response: AxiosResponse<TokenResponse> = await axios.post(
        `${apiUrl}/users/login`,
        user
      );

      const {
        data: { token },
      } = response;

      const userLogged: UserLoged = decodeToken(token);

      dispatch(loginUserActionCreator(userLogged));

      localStorage.setItem("token", userLogged.token);
      navigator(navigateTarget);
    } catch (error) {
      failModal("No se pudo logear");
      return 400;
    }
  };

  return { sendUserToAPI, loginUser };
};

export default useUsers;
