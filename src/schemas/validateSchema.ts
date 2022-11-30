import * as yup from "yup";
import messagesText from "../utils/messagesText";

const { name, password, email } = messagesText;

export const validateLoginSchema = yup.object().shape({
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

export const validateRegisterSchema = yup.object().shape({
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
