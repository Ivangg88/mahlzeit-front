import { renderHook } from "@testing-library/react";
import { User } from "../types/interfaces";
import useUsers from "./useUsers";

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
          current: { sendUSerToAPI },
        },
      } = renderHook(() => useUsers());

      const response = await sendUSerToAPI(user, apiUrl);

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
          current: { sendUSerToAPI },
        },
      } = renderHook(() => useUsers());

      const response = await sendUSerToAPI(incorrectUser, apiUrl);

      expect(response).toBe(expectedResponse);
    });
  });
});
