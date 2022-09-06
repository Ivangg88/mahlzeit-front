import Header from "../../components/Header/Header";
import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = () => {
  return (
    <LoginPageStyled>
      {" "}
      <Header />
      <LoginForm />
    </LoginPageStyled>
  );
};

export default LoginPage;
