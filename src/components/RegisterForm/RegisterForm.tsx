import { useState } from "react";
import UserRegister from "../../types/interfaces";
import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";

const submit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
};

const RegisterForm = () => {
  let userInitial: UserRegister = {
    userName: "",
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState<UserRegister>(userInitial);

  const addDataFromInputs = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  return (
    <RegisterFormStyled>
      <form
        onSubmit={(event) => submit(event)}
        className="register-form"
        autoComplete="off"
      >
        <h1 className="register-form__title">Crea tu perfil</h1>
        <div className="register-form__inputs-container">
          <div className="register-form__input-field">
            <label htmlFor="name" className="label">
              Nombre:
            </label>
            <input
              id="name"
              name="userName"
              type="text"
              className="register-form__input"
              placeholder="Cristina"
              onChange={(event) => addDataFromInputs(event)}
            />
          </div>

          <div className="register-form__input-field">
            <label htmlFor="name" className="label">
              Email:
            </label>
            <input
              id="email"
              name="email"
              type="text"
              className="register-form__input"
              placeholder="cristina@mail.com"
              onChange={(event) => addDataFromInputs(event)}
            />
          </div>

          <div className="register-form__input-field">
            <label htmlFor="password" className="label">
              Contraseña:
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="register-form__input"
              placeholder="********"
              onChange={(event) => addDataFromInputs(event)}
            />
          </div>

          <div className="register-form__input-field">
            <label htmlFor="passwordConfirm" className="label">
              Confirmar contraseña:
            </label>
            <input
              id="passwordConfirm"
              type="password"
              className="register-form__input"
              placeholder="********"
              onChange={(event) => addDataFromInputs(event)}
            />
          </div>
        </div>
        <link
          className="register-form__link"
          rel="stylesheet"
          href="#"
          title="click aquí"
        />
        <span className="link-dialog">
          ¿Ya registrado?{" "}
          <link
            className="register-form__link"
            rel="stylesheet"
            href="#"
            title="click aquí"
          />
          para login.
        </span>

        <Button type="submit" text="Crear perfil" />
      </form>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
