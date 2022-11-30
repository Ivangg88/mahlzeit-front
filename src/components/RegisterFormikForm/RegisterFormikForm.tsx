import { Form, Formik, useFormikContext } from "formik";
import { NavLink } from "react-router-dom";
import { validateRegisterSchema } from "../../schemas/validateSchema";
import { UserRegister } from "../../types/interfaces";
import Button from "../Button/Button";
import CustomInputField from "../CustomInputField/CustomInputField";
import RegisterFormikFormStyled from "./RegisterFormikFormStyled";

const RegisterFormikForm = () => {
  const { isValid } = useFormikContext();

  return (
    <RegisterFormikFormStyled>
      <Form
        data-testid="form-register"
        className="register-form"
        autoComplete="off"
      >
        <h1 className="register-form__title">Crea tu perfil</h1>
        <div className="register-form__inputs-container">
          <CustomInputField
            class="register-form__input"
            label="Nombre"
            name="userName"
            placeholder="Nombre"
            type="text"
          />

          <CustomInputField
            class="register-form__input"
            label="Email"
            name="email"
            placeholder="Email"
            type="text"
          />

          <CustomInputField
            class="register-form__input"
            label="Confirmar email"
            name="emailConfirm"
            placeholder="Email"
            type="text"
          />

          <CustomInputField
            class="register-form__input"
            label="Contraseña"
            name="password"
            placeholder="********"
            type="password"
          />

          <CustomInputField
            class="register-form__input"
            label="Confirmar contraseña"
            name="passwordConfirm"
            placeholder="********"
            type="password"
          />
        </div>

        <div className="register-form__navigator">
          <span>¿Ya registrado?</span>
          <NavLink to={"/login"}>Click aquí para login</NavLink>
        </div>

        <Button type="submit" text="Crear perfil" disable={!isValid} />
      </Form>
    </RegisterFormikFormStyled>
  );
};

export default RegisterFormikForm;
