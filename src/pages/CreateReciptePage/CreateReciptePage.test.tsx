import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Wrapper from "../../utils/Wrapper";
import CreateReciptePage from "./CreateReciptePage";

describe("Given a componente CreateReciptePage", () => {
  describe("When rendered", () => {
    test("Then it should show a RecipteForm component", () => {
      const title = "Ingredientes";

      render(
        <BrowserRouter>
          {" "}
          <CreateReciptePage />
        </BrowserRouter>,
        { wrapper: Wrapper }
      );

      screen.getByRole("heading", { name: title });
    });
  });
});
