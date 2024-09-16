import { UserLoged } from "../../types/interfaces";
import decodeToken from "../authorization";

export const getInitialUser = (): UserLoged => {
  const token = localStorage.getItem("token");

  if (token) {
    const userLogged: UserLoged = decodeToken(token);
    userLogged.isLogged = true;

    return userLogged;
  }
  return {
    isLogged: false,
    userName: "",
    token: "",
  };
};

export const initialLoggedUser = getInitialUser();
