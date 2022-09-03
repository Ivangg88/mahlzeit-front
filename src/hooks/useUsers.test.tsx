import { renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { User } from "../types/interfaces";
import useUsers from "./useUsers";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

let Wrapper: ({ children }: WrapperProps) => JSX.Element;

beforeEach(() => {
  Wrapper = ({ children }: WrapperProps): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };
});

describe("Given a function sendUserToAPI", () => {
  const apiUrl = process.env.REACT_APP_API_URL!;

  describe("When is called with a correct user.", () => {
    test("Then it should return 201.", async () => {
      const user: User = {
        userName: "Fake user",
        email: "mock@fake.net",
        password: "12345678",
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

  describe("When is called with an incorrect user", () => {
    test("Then it should return 400", async () => {
      const incorrectUser: User = {
        userName: "",
        email: "",
        password: "",
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
