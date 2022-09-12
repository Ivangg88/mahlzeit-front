import { rest } from "msw";
import { Recipte, User } from "../types/interfaces";

const items: Recipte[] = [
  {
    id: "Mock id",
    name: "Mock item",
    dificulty: "Fácil",
    autor: "",
    persons: 0,
    image: "",
    ingredients: "",
    process: "",
    backupImage: "",
  },
];

const recipte: Recipte = {
  backupImage: "",
  id: "",
  autor: "Mock autor",
  dificulty: "Mock dificulty",
  image: " Mock image",
  ingredients: "Mock ingredients",
  name: " Mock name",
  persons: 4,
  process: "Mock process",
};

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

  rest.get(
    `${process.env.REACT_APP_API_URL}/reciptes/getAll`,
    async (req, res, ctx) => {
      const status = 201;

      return res(ctx.status(status), ctx.json({ reciptes: items }));
    }
  ),
  rest.post(
    `${process.env.REACT_APP_API_URL}/reciptes/create`,
    async (req, res, ctx) => {
      const status = 200;

      return res(ctx.status(status), ctx.json(recipte));
    }
  ),

  rest.delete(
    `${process.env.REACT_APP_API_URL}/reciptes/delete`,
    async (req, res, ctx) => {
      const responseOk = { Message: "Recipte has been succesfully deleted" };
      const responseBad = new Error("Error deleting the task");

      const id: string | null = await req.url.searchParams.get("id");

      const status = id === "" ? 404 : 201;
      const response = id === "" ? responseBad : responseOk;

      return res(ctx.status(status), ctx.json(response));
    }
  ),

  rest.get(
    `${process.env.REACT_APP_API_URL}/reciptes/getById/test-id`,
    async (req, res, ctx) => {
      const status = 200;
      const response = { recipte };
      return res(ctx.status(status), ctx.json(response));
    }
  ),
];
