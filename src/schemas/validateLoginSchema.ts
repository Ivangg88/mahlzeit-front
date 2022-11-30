import * as yup from "yup";
import messagesText from "../utils/messagesText";

const { name, password } = messagesText;

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
