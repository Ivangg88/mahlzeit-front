import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import * as yup from "yup";

const useValidateSchemas = () => {
  const { name, email, password } = useAppSelector(
    (state: RootState) => state.i8n.translations.validateErrors
  );

  const validateLoginSchema = yup.object().shape({
    userName: yup
      .string()
      .required(name.mustName)
      .min(2, name.minName)
      .max(25, name.maxName),

    password: yup
      .string()
      .required(password.mustPassword)
      .min(8, password.minPassword),
  });

  const validateRegisterSchema = yup.object().shape({
    email: yup
      .string()
      .required(email.mustEmail)
      .email(email.checkEmail)
      .max(60, email.maxEmail),

    emailConfirm: yup
      .string()
      .required(email.mustEmail)
      .email(email.checkEmail)
      .max(60, email.maxEmail)
      .oneOf([yup.ref("email"), null], email.confirmEmail),

    userName: yup
      .string()
      .required(name.mustName)
      .min(2, name.minName)
      .max(25, name.maxName),

    password: yup
      .string()
      .required(password.mustPassword)
      .min(8, password.minPassword),

    passwordConfirm: yup
      .string()
      .required(password.mustPassword)
      .min(8, password.minPassword)
      .oneOf([yup.ref("password"), null], password.confirmPassword),
  });

  return { validateLoginSchema, validateRegisterSchema };
};

export default useValidateSchemas;
