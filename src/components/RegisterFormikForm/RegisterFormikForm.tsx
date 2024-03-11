import { Form, useFormikContext } from "formik";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import CustomInputField from "../CustomInputField/CustomInputField";
import RegisterFormikFormStyled from "./RegisterFormikFormStyled";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";

const RegisterFormikForm = () => {
  const {
    nameInput,
    namePlaceholder,
    passwordInput,
    passwordConfirmInput,
    passwordPlaceholder,
    emailInput,
    emailPlaceholder,
    emailConfirmInput,
    registerbutton,
    loginLink,
    yetRegister,
    registerTitle,
  } = useAppSelector((state: RootState) => state.i8n.translations.userForms);
  const { isValid } = useFormikContext();

  return (
    <RegisterFormikFormStyled>
      <Form
        data-testid="form-register"
        className="register-form"
        autoComplete="off"
      >
        <h1 className="register-form__title">{registerTitle}</h1>
        <div className="register-form__inputs-container">
          <CustomInputField
            class="register-form__input"
            label={nameInput}
            name="userName"
            placeholder={namePlaceholder}
            type="text"
          />

          <CustomInputField
            class="register-form__input"
            label={emailInput}
            name="email"
            placeholder={emailPlaceholder}
            type="text"
          />

          <CustomInputField
            class="register-form__input"
            label={emailConfirmInput}
            name="emailConfirm"
            placeholder={emailPlaceholder}
            type="text"
          />

          <CustomInputField
            class="register-form__input"
            label={passwordInput}
            name="password"
            placeholder={passwordPlaceholder}
            type="password"
          />

          <CustomInputField
            class="register-form__input"
            label={passwordConfirmInput}
            name="passwordConfirm"
            placeholder={passwordPlaceholder}
            type="password"
          />
        </div>

        <div className="register-form__navigator">
          <span>{yetRegister}</span>
          <NavLink to={"/login"}>{loginLink}</NavLink>
        </div>

        <Button type="submit" text={registerbutton} disable={!isValid} />
      </Form>
    </RegisterFormikFormStyled>
  );
};

export default RegisterFormikForm;
