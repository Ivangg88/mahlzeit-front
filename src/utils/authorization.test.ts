import jwt_decode from "jwt-decode";
import decodeToken from "./authorization";

jest.mock("jwt-decode", () => jest.fn());

describe("Given a function decodeToken", () => {
  describe("When is called with a string '1a2b3c4d'", () => {
    test("Then it should call the method jwt_decode with '1a2b3c4d'", () => {
      const token = "1a2b3c4d";
      (jwt_decode as jest.Mock).mockImplementationOnce(() => ({ token }));

      decodeToken(token);

      expect(jwt_decode).toHaveBeenCalledWith(token);
    });
  });
});
