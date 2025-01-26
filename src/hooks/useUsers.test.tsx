import { renderHook } from "@testing-library/react";
import { loginUserActionCreator } from "../store/user/userSlice";
import { UserLoged, UserLogin, UserRegister } from "../types/interfaces";
import Wrapper from "../utils/Wrapper";
import useUsers from "./useUsers";

const mockUserToken: UserLoged = {
  token: "1a2b3c4d",
  userName: "Mock user",
  id: "",
};
const mockDispatch = jest.fn();
const mockNavigate = jest.fn();

jest.mock("../utils/authorization", () => () => mockUserToken);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a useUsers hook", () => {
  const apiUrl = process.env.REACT_APP_API_URL!;
  describe("When the function sendUserToAPI is called", () => {
    describe("With a correct user.", () => {
      test("Then it should return 201.", async () => {
        const user: UserRegister = {
          userName: "Fake user",
          email: "mock@fake.net",
          password: "12345678",
          emailConfirm: "mock@fake.net",
          passwordConfirm: "12345678",
        };
        const expectedResponse = 201;
        const {
          result: {
            current: { sendUserToAPI },
          },
        } = renderHook(() => useUsers(), { wrapper: Wrapper });

        const response = await sendUserToAPI(user, apiUrl);

        expect(response).toBe(expectedResponse);
      });
    });

    describe("With an incorrect user", () => {
      test("Then it should return 400", async () => {
        const incorrectUser: UserRegister = {
          userName: "",
          email: "",
          password: "",
          emailConfirm: "",
          passwordConfirm: "",
        };
        const expectedResponse = 400;
        const {
          result: {
            current: { sendUserToAPI },
          },
        } = renderHook(() => useUsers(), { wrapper: Wrapper });

        const response = await sendUserToAPI(incorrectUser, apiUrl);

        expect(response).toBe(expectedResponse);
      });
    });
  });

  describe("When the function loginUser is called", () => {
    const navigateTarget = "/";
    describe("With a valid  user and password", () => {
      test("Then it should call the dispatch with a user with token", async () => {
        const user: UserLogin = {
          userName: mockUserToken.userName,
          password: "ladaily",
        };
        const {
          result: {
            current: { loginUser },
          },
        } = renderHook(() => useUsers(), { wrapper: Wrapper });

        await loginUser(user, apiUrl, navigateTarget);

        expect(mockDispatch).toHaveBeenCalledWith(
          loginUserActionCreator(mockUserToken)
        );
      });
    });

    describe("With an invalid user", () => {
      test("Then it should return a 400", async () => {
        const invalidUser: UserLogin = {
          userName: "",
          password: "",
        };
        const statusCode = 400;
        const {
          result: {
            current: { loginUser },
          },
        } = renderHook(() => useUsers(), { wrapper: Wrapper });

        const expectedResult = await loginUser(
          invalidUser,
          apiUrl,
          navigateTarget
        );

        expect(expectedResult).toBe(statusCode);
      });
    });
  });
});
