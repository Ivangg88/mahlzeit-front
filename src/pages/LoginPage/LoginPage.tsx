import Header from "../../components/Header/Header";
import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

interface LoginPageProps {
  navigateTarget: string;
}
const LoginPage = ({ navigateTarget }: LoginPageProps) => {
  return (
    <LoginPageStyled>
      <Header />
      <LoginForm navigateTarget={navigateTarget} />
    </LoginPageStyled>
  );
};

export default LoginPage;
