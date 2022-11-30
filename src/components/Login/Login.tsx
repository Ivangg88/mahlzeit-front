import { Formik } from "formik";
import useUsers from "../../hooks/useUsers";
import { validateLoginSchema } from "../../schemas/validateSchema";
import { UserLogin } from "../../types/interfaces";
import LoginFormikForm from "../LoginFormikForm/LoginFormikForm";

const initialValues: UserLogin = { userName: "", password: "" };
const apiUrl = process.env.REACT_APP_API_URL!;
interface LoginProps {
  navigateTarget: string;
}

const Login = ({ navigateTarget }: LoginProps): JSX.Element => {
  const { loginUser } = useUsers();
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
