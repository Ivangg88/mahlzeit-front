import styled from "styled-components";

const DetailsFormStyled = styled.form`
  width: 400px;
  min-height: 620px;
  background-color: ${(props) => props.theme.thirdColor};
  font-family: ${(props) => props.theme.fontSecondType};
  color: ${(props) => props.theme.fontMainColor};
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  ul {
    list-style: none;
    padding: 0;
  }

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
      width: 100%;
      padding-left: 5px;
      border: none;
      border-radius: 5px;
      background-color: aliceblue;
    }

    &__banner {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
    }
  }

  .button-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
  }

  .buttons {
    display: flex;
    justify-content: space-around;

    &--small {
      background-color: transparent;
      height: 30px;
      width: 60px;
      border-radius: 12px;
      font-weight: bold;
      font-size: 2rem;
    }

    &--small:hover {
      color: white;
    }
  }
`;

export default DetailsFormStyled;
