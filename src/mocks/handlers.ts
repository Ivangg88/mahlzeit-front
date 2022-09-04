import { rest } from "msw";
import { User, UserLoged } from "../types/interfaces";

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL}/users/register`,
    async (req, res, ctx) => {
      const userResponse: User = await req.json();
      let status: number;

      if (
        !userResponse.userName ||
        !userResponse.password ||
        !userResponse.email
      ) {
        status = 400;
      } else {
        status = 201;
      }

      return res(ctx.status(status));
    }
  ),

  rest.post(
    `${process.env.REACT_APP_API_URL}/users/login`,
    async (req, res, ctx) => {
      const { userName } = await req.json();
      const status = userName === "" ? 400 : 200;

      return res(ctx.status(status), ctx.json({ user: { token: "1a2b3c4d" } }));
    }
  ),
];
