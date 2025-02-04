import { UserLoged } from "../../types/interfaces";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";

describe("Given a loginUserActionCreator", () => {
  describe("When is called", () => {
    test("Then it should return an action with the type 'user/loginUser'", () => {
      const actionType = "user/loginUser";
      const newUser: UserLoged = {
        userName: "",
        token: "",
        id: "",
      };
      const expectedAction = {
        type: actionType,
        payload: newUser,
      };

      const action = loginUserActionCreator(newUser);

      expect(action).toStrictEqual(expectedAction);
    });
  });
});

describe("Given a userReducer function", () => {
  describe("When is called with an action type 'user/loginUser' and a payload with an user", () => {
    test("Then it should return a copy of the user loged", () => {
      const newUser: UserLoged = {
        userName: "Test user",
        token: "1a2b3c4d",
        isLogged: true,
        id: "",
      };

      const action = loginUserActionCreator(newUser);

      const receivedUser = userReducer(newUser, action);

      expect(receivedUser).toStrictEqual(newUser);
    });
  });

  describe("When is called with an action type 'user/logoutUser' and a payload with an user", () => {
    test("Then it should return a copy of the logout user", () => {
      const newUser: UserLoged = {
        userName: "Test user",
        token: "1a2b3c4d",
        isLogged: true,
        id: "",
      };

      const action = logoutUserActionCreator();

      const receivedUser = userReducer(newUser, action);

      expect(receivedUser.isLogged).toStrictEqual(false);
    });
  });
});
