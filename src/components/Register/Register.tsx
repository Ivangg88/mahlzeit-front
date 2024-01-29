import { Formik } from "formik";
import useUsers from "../../hooks/useUsers";
import { UserRegister } from "../../types/interfaces";
import RegisterFormikForm from "../RegisterFormikForm/RegisterFormikForm";
import useValidateSchemas from "../../hooks/useValidateSchemas/useValidateSchemas";

const userInitial: UserRegister = {
  userName: "",
  email: "",
  emailConfirm: "",
  password: "",
  passwordConfirm: "",
};
const apiUrl = process.env.REACT_APP_API_URL!;

const Register = (): JSX.Element => {
  const { sendUserToAPI } = useUsers();
  const { validateRegisterSchema } = useValidateSchemas();

  return (
    <Formik
      initialValues={userInitial}
      validationSchema={validateRegisterSchema}
      onSubmit={async (values, { resetForm }) => {
        if (await sendUserToAPI(values, apiUrl)) {
          resetForm({ values: userInitial });
        }
      }}
    >
      <RegisterFormikForm />
    </Formik>
  );
};

export default Register;
