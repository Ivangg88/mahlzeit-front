import styled from "styled-components";

const IngredientsFormStyled = styled.form`
  position: relative;
  width: 400px;
  height: 620px;
  background-color: ${(props) => props.theme.thirdColor};
  font-family: ${(props) => props.theme.fontSecondType};
  color: ${(props) => props.theme.fontMainColor};
  border-radius: 15px;
  padding: 20px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .recipte-form {
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
      min-height: 37px;
      padding-left: 5px;
      border: none;
      border-radius: 5px;
    }

    &__ingredients {
      min-height: 100px;
      width: 360px;
      resize: none;
      padding-left: 5px;
      border: none;
      border-radius: 5px;
      margin-bottom: 20px;
    }

    &__banner {
      position: relative;
      bottom: -30px;
      width: 100%;
      display: flex;
      justify-content: space-evenly;
    }
  }

  .button-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    position: relative;
    bottom: -30px;
    margin-bottom: 10px;
  }
`;

export default IngredientsFormStyled;
