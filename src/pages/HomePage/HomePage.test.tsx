import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Wrapper from "../../utils/Wrapper";
import HomePage from "./HomePage";

describe("Given a component HomePage", () => {
  describe("When rendered", () => {
    test("Then it should show a Header component", () => {
      const title = "Mahlzeit";

      render(
        <BrowserRouter>
          {" "}
          <HomePage />
        </BrowserRouter>,
        { wrapper: Wrapper }
      );

      screen.getByRole("heading", { name: title });
    });
  });
});
