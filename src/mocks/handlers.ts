import { rest } from "msw";
import { User } from "../types/interfaces";

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
];
