import { loginUserActionCreator } from "./userSlice";

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
