import Header from "../../components/Header/Header";
import Login from "../../components/Login/Login";
import LoginPageStyled from "./LoginPageStyled";

interface LoginPageProps {
  navigateTarget: string;
}
const LoginPage = ({ navigateTarget }: LoginPageProps) => {
  return (
    <LoginPageStyled>
      <Header />
      <Login navigateTarget={navigateTarget} />
    </LoginPageStyled>
  );
};

export default LoginPage;
