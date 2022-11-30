import Header from "../../components/Header/Header";
import Register from "../../components/Register/Register";
import RegisterPageStyled from "./RegisterPageStyled";

const RegisterPage = () => {
  return (
    <RegisterPageStyled>
      <Header />
      <Register />
    </RegisterPageStyled>
  );
};

export default RegisterPage;
