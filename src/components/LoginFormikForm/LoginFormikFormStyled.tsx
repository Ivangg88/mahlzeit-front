import styled from "styled-components";

const LoginFormikFormStyled = styled.div`
  margin-top: 20px;
  width: 400px;
  height: 620px;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.thirdColor};
  font-family: ${(props) => props.theme.fontSecondType};
  color: ${(props) => props.theme.fontMainColor};
  border-radius: 15px;

  .login-form {
    font-family: inherit;
    color: inherit;
    padding: 20px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    &__title {
      font-family: ${(props) => props.theme.fontMainType};
      font-size: 30px;
      margin: 0;
    }

    &__inputs-container {
      margin-top: 20px;
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      gap: 20px;
    }

    &__input {
      width: 100%;
      font-family: inherit;
      height: 37px;
      padding-left: 5px;
      border: none;
      border-radius: 5px;
    }

    &__navigator {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
  }
`;

export default LoginFormikFormStyled;
