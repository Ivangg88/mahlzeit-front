import styled from "styled-components";

const LoginFormStyled = styled.div`
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

    &__input-field {
      height: 65px;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    &__input {
      font-family: inherit;
      height: 37px;
      padding-left: 5px;
      border: none;
      border-radius: 5px;
    }

    .label {
      color: inherit;
      font-family: ${(props) => props.theme.fontSecondType};
    }

    &__navigator {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
  }
`;

export default LoginFormStyled;
