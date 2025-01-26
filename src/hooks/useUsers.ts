import { useAppDispatch, useAppSelector } from "../app/hooks";
import axios, { AxiosResponse } from "axios";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../store/user/userSlice";
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
  const {
    toastMessages: {
      user: userText,
      registerSuccess,
      registerError,
      loginError,
      loginSuccess,
    },
  } = useAppSelector((state) => state.i8n.translations);

  const registerUser = async (user: UserRegister, apiUrl: string) => {
    let response: Response;
    const userRegister: User = {
      email: user.email,
      password: user.password,
      userName: user.userName,
    };
    try {
      response = await axios.post(`${apiUrl}/users/register`, userRegister);
      sucessModal(`${userText} ${user.userName} ${registerSuccess}`);
    } catch (error) {
      failModal(`${registerError} ${user.userName}`);
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
      sucessModal(`${userText} ${user.userName} ${loginSuccess}`);
      navigator(navigateTarget);
    } catch (error) {
      failModal(loginError);
      return 400;
    }
  };

  const logOut = () => {
    dispatch(logoutUserActionCreator());
    localStorage.removeItem("token");
  };

  return { sendUserToAPI: registerUser, loginUser, logOut };
};

export default useUsers;
