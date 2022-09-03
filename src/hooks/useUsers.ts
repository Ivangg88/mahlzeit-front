import { useAppDispatch } from "../app/hooks";
import { loginUserActionCreator } from "../store/user/userSlice";
import { User, UserLoged, UserLogin } from "../types/interfaces";
import decodeToken from "../utils/authorization";

const useUsers = () => {
  const dispatch = useAppDispatch();

  const sendUserToAPI = async (user: User, apiUrl: string) => {
    let response: Response;
    try {
      response = await fetch(`${apiUrl}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.status !== 201) {
        throw new Error();
      }
    } catch (error) {
      return 400;
    }

    return response.status;
  };

  const loginUser = async (user: UserLogin, apiUrl: string) => {
    let response: Response;

    try {
      response = await fetch(`${apiUrl}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.status !== 201) {
        throw new Error();
      }

      const {
        user: { token },
      } = await response.json();

      const userLogged: UserLoged = decodeToken(token);
      dispatch(loginUserActionCreator(userLogged));
      localStorage.setItem("token", userLogged.token);
    } catch (error) {
      return 400;
    }
  };
  return { sendUserToAPI, loginUser };
};

export default useUsers;
