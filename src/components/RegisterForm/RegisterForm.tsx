import { useState } from "react";
import { NavLink } from "react-router-dom";
import useUsers from "../../hooks/useUsers";
import { User, UserRegister } from "../../types/interfaces";
import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = () => {
  let userInitial: UserRegister = {
    userName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    emailConfirm: "",
  };

  const apiUrl = process.env.REACT_APP_API_URL!;
  const [userData, setUserData] = useState<UserRegister>(userInitial);

  const { sendUserToAPI: sendUSerToAPI } = useUsers();

  const addDataFromInputs = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const submit = (event: React.FormEvent<HTMLFormElement>, url: string) => {
    event.preventDefault();
    sendUSerToAPI(userData, url);
    setUserData(userInitial);
  };

  return (
    <RegisterFormStyled>
      <form
        data-testid="form-register"
        onSubmit={(event) => submit(event, apiUrl)}
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
              value={userData.userName}
              className="register-form__input"
              placeholder="Cristina"
              onChange={(event) => addDataFromInputs(event)}
            />
          </div>

          <div className="register-form__input-field">
            <label htmlFor="email" className="label">
              Email:
            </label>
            <input
              id="email"
              name="email"
              type="text"
              value={userData.email}
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
              value={userData.password}
              className="register-form__input"
              placeholder="min 8 caracteres"
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
              name="passwordConfirm"
              value={userData.passwordConfirm}
              className="register-form__input"
              placeholder="confirmar contraseña"
              onChange={(event) => addDataFromInputs(event)}
            />
          </div>
        </div>

        <div className="register-form__navigator">
          <span>¿Ya registrado?</span>
          <NavLink to={"/login"}>Click aquí para login</NavLink>
        </div>

        <Button type="submit" text="Crear perfil" />
      </form>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
