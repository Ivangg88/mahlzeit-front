import { Formik } from "formik";
import useUsers from "../../hooks/useUsers";
import { UserLogin } from "../../types/interfaces";
import LoginFormikForm from "../LoginFormikForm/LoginFormikForm";
import useValidateSchemas from "../../hooks/useValidateSchemas/useValidateSchemas";

const initialValues: UserLogin = { userName: "", password: "" };
const apiUrl = process.env.REACT_APP_API_URL!;
interface LoginProps {
  navigateTarget: string;
}

const Login = ({ navigateTarget }: LoginProps): JSX.Element => {
  const { loginUser } = useUsers();
  const { validateLoginSchema } = useValidateSchemas();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateLoginSchema}
      onSubmit={(values, { resetForm }) => {
        (async () => {
          if (await loginUser(values, apiUrl, navigateTarget)) {
            resetForm();
          }
        })();
      }}
    >
      <LoginFormikForm />
    </Formik>
  );
};

export default Login;
