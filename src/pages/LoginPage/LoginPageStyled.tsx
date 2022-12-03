import styled from "styled-components";

const LoginPageStyled = styled.div`
  width: 450px;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  @media (min-width: 450px) {
    width: 100%;
    padding: 10px 0;
  }
`;

export default LoginPageStyled;
