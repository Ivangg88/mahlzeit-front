import { Form, useFormikContext } from "formik";
import { NavLink } from "react-router-dom";

import Button from "../Button/Button";
import CustomInputField from "../CustomInputField/CustomInputField";
import LoginFormikFormStyled from "./LoginFormikFormStyled";

const LoginFormikForm = (): JSX.Element => {
  const { isValid } = useFormikContext();

  return (
    <LoginFormikFormStyled>
      <Form data-testid="form-login" className="login-form" autoComplete="off">
        <h1 className="login-form__title">Login</h1>

        <div className="login-form__inputs-container">
          <CustomInputField
            class="login-form__input"
            label="Nombre"
            name="userName"
            placeholder="Nombre"
            type="text"
          />
          <CustomInputField
            class="login-form__input"
            label="Contraseña"
            name="password"
            placeholder="********"
            type="password"
          />
        </div>

        <div className="login-form__navigator">
          <span>¿Aún no registrado?</span>
          <NavLink to={"/register"}>Click aquí para registro</NavLink>
        </div>
        <Button type="submit" text="Entrar" disable={!isValid} />
      </Form>
    </LoginFormikFormStyled>
  );
};
export default LoginFormikForm;
