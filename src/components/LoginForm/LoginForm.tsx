import { useState } from "react";
import { NavLink } from "react-router-dom";
import useUsers from "../../hooks/useUsers";
import { UserLogin } from "../../types/interfaces";
import Button from "../Button/Button";
import UserFormFeedback from "../UserFormFeedback/UserFormFeedback";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = () => {
  let userInitial: UserLogin = {
    userName: "",
    password: "",
  };

  const apiUrl = process.env.REACT_APP_API_URL!;
  const [userData, setUserData] = useState<UserLogin>(userInitial);
  const { loginUser } = useUsers();

  const addDataFromInputs = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const user: UserLogin = {
    userName: userData.userName,
    password: userData.password,
  };

  const submit = (event: React.FormEvent<HTMLFormElement>, url: string) => {
    event.preventDefault();
    loginUser(user, url);
    setUserData(userInitial);
  };

  return (
    <LoginFormStyled>
      <form
        data-testid="form-login"
        onSubmit={(event) => submit(event, apiUrl)}
        className="login-form"
        autoComplete="off"
      >
        <h1 className="login-form__title">Login</h1>
        <div className="login-form__inputs-container">
          <div className="login-form__input-field">
            <label htmlFor="name" className="label">
              Nombre:
            </label>
            <input
              id="name"
              name="userName"
              type="text"
              value={user.userName}
              className="login-form__input"
              placeholder="Cristina"
              onChange={(event) => addDataFromInputs(event)}
            />
          </div>

          <div className="login-form__input-field">
            <label htmlFor="password" className="label">
              Contraseña:
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={user.password}
              className="login-form__input"
              placeholder="min 8 caracteres"
              onChange={(event) => addDataFromInputs(event)}
            />
          </div>
        </div>

        <div className="login-form__navigator">
          <span>¿Aún no registrado?</span>
          <NavLink to={"/register"}>Click aquí para registro</NavLink>
        </div>
        <Button type="submit" text="Entrar" />
      </form>
    </LoginFormStyled>
  );
};

export default LoginForm;
