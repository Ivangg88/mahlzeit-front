import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ProtoRecipte } from "../../types/interfaces";
import Wrapper from "../../utils/Wrapper";
import RecipteForm from "./RecipteForm";

const recipte: ProtoRecipte = {
  autor: "Mock autor",
  dificulty: "Mock dificulty",
  image: " Mock image",
  ingredients: "Mock ingredients",
  name: " Mock name",
  persons: 10,
  process: "Mock process",
};

describe("Given a component RecipteForm", () => {
  describe("When rendered and the user browses it", () => {
    test("Then it should update the input value with the typed data from user.", async () => {
      render(
        <BrowserRouter>
          <RecipteForm />
        </BrowserRouter>,
        { wrapper: Wrapper }
      );

      const nameInput: HTMLInputElement = screen.getByRole("textbox", {
        name: "Nombre:",
      });

      await userEvent.type(nameInput, recipte.name);

      expect(nameInput.value).toBe(recipte.name);
    });

    test("Then it should show the heading of each page", async () => {
      render(
        <BrowserRouter>
          <RecipteForm />
        </BrowserRouter>,
        { wrapper: Wrapper }
      );

      const button = screen.getByRole("button", { name: "Siguiente" });

      await userEvent.click(button);

      const title = screen.getByRole("heading", { name: "Procedimiento" });

      expect(title).toBeInTheDocument();

      const button2 = screen.getByRole("button", { name: "Siguiente" });

      await userEvent.click(button2);

      const title2 = screen.getByRole("heading", { name: "Añade tu imagen" });

      expect(title2).toBeInTheDocument();

      const button3 = screen.getByRole("button", { name: "Anterior" });

      await userEvent.click(button3);

      const title3 = screen.getByRole("heading", { name: "Procedimiento" });

      expect(title3).toBeInTheDocument();
    });
  });

  describe("When the user is in the last page and click on 'Crear Receta'", () => {
    test("It should send the formular", async () => {
      render(
        <BrowserRouter>
          <RecipteForm />
        </BrowserRouter>,
        { wrapper: Wrapper }
      );

      const button = screen.getByRole("button", { name: "Siguiente" });

      await userEvent.click(button);

      const title = screen.getByRole("heading", { name: "Procedimiento" });

      expect(title).toBeInTheDocument();

      const button2 = screen.getByRole("button", { name: "Siguiente" });

      await userEvent.click(button2);

      const buttonSubmit = screen.getByRole("button", { name: "Crear Receta" });

      const form = screen.getByTestId("form-recipte") as HTMLElement;
      form.onsubmit = jest.fn();

      await userEvent.click(buttonSubmit);

      expect(form.onsubmit).toHaveBeenCalled();
    });
  });

  describe("When the user is in the last page and added a file", () => {
    test("Then it should calle the function createImage", async () => {
      render(
        <BrowserRouter>
          <RecipteForm />
        </BrowserRouter>,
        { wrapper: Wrapper }
      );

      const button = screen.getByRole("button", { name: "Siguiente" });

      await userEvent.click(button);

      const title = screen.getByRole("heading", { name: "Procedimiento" });

      expect(title).toBeInTheDocument();

      const button2 = screen.getByRole("button", { name: "Siguiente" });

      await userEvent.click(button2);

      const input = screen.getByLabelText("Añadir imagen:");

      await userEvent.upload(input, new File([""], ""));
    });
  });
});
