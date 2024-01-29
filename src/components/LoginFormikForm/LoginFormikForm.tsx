import { Form, useFormikContext } from "formik";
import { NavLink } from "react-router-dom";

import Button from "../Button/Button";
import CustomInputField from "../CustomInputField/CustomInputField";
import LoginFormikFormStyled from "./LoginFormikFormStyled";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";

const LoginFormikForm = (): JSX.Element => {
  const {
    nameInput,
    namePlaceholder,
    passwordInput,
    passwordPlaceholder,
    loginButton,
    registerLink,
    loginTitle,
    notRegister,
  } = useAppSelector((state: RootState) => state.i8n.translations.userForms);
  const { isValid } = useFormikContext();

  return (
    <LoginFormikFormStyled>
      <Form data-testid="form-login" className="login-form" autoComplete="off">
        <h1 className="login-form__title">{loginTitle}</h1>

        <div className="login-form__inputs-container">
          <CustomInputField
            class="login-form__input"
            label={nameInput}
            name="userName"
            placeholder={namePlaceholder}
            type="text"
          />
          <CustomInputField
            class="login-form__input"
            label={passwordInput}
            name="password"
            placeholder={passwordPlaceholder}
            type="password"
          />
        </div>

        <div className="login-form__navigator">
          <span>{notRegister}</span>
          <NavLink to={"/register"}>{registerLink}</NavLink>
        </div>
        <Button type="submit" text={loginButton} disable={!isValid} />
      </Form>
    </LoginFormikFormStyled>
  );
};
export default LoginFormikForm;
