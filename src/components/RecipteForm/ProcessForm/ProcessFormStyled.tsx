import styled from "styled-components";

const ProcessFormStyled = styled.form`
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

  .recipte-form {
    &__title {
      font-family: ${(props) => props.theme.fontMainType};
      font-size: 30px;
      margin: 0;
    }

    &__input-field {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    &__process {
      min-height: 300px;
      width: 360px;
      resize: none;
      padding-left: 5px;
      border: none;
      border-radius: 5px;
      margin-bottom: 20px;
    }

    &__buttons-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default ProcessFormStyled;
