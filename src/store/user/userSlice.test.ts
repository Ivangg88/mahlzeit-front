import { UserLoged } from "../../types/interfaces";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a loginUserActionCreator", () => {
  describe("When is called", () => {
    test("Then it should return an action with athe type 'user/loginUser'", () => {
      const actionType = "user/loginUser";
      const expectedAction = {
        type: actionType,
        payload: true,
      };

      const action = loginUserActionCreator(true);

      expect(action).toStrictEqual(expectedAction);
    });
  });
});

describe("Given a userReducer function", () => {
  describe("When is called with an action type 'user/loginUser' and a payload 'true", () => {
    test("Then it should return a copy of the previousState with the property isLogged = true", () => {
      const previousUser: UserLoged = {
        userName: "",
        isLogged: false,
        token: "",
      };
      const expectedUser = {
        ...previousUser,
        isLogged: true,
      };

      const action = loginUserActionCreator(true);

      const receivdUser = userReducer(previousUser, action);

      expect(receivdUser).toStrictEqual(expectedUser);
    });
  });
});
