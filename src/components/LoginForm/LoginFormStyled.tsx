import styled from "styled-components";

const LoginFormStyled = styled.div`
  width: 400px;
  height: 620px;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.thirdColor};
  font-family: ${(props) => props.theme.fontMainType};
  color: ${(props) => props.theme.fontMainColor};
  border-radius: 15px;

  .login-form {
    color: inherit;
    font-family: inherit;
    padding: 20px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    &__title {
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
      height: 37px;
      padding-left: 5px;
      border: none;
      border-radius: 5px;
    }

    .label {
      color: inherit;
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
