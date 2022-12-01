import styled from "styled-components";

const LoginPageStyled = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  @media (min-width: 450px) {
    width: 100%;
    padding: 0;
  }
`;

export default LoginPageStyled;
