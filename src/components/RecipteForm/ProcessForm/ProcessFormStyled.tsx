import styled from "styled-components";

const ProcessFormStyled = styled.div`
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
    margin: 0;
  }

  .recipte-form {
    &__title {
      font-family: ${(props) => props.theme.fontMainType};
      font-size: 30px;
      margin: 0;
    }

    &__process-list {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    &__process {
      width: 100%;
      padding-left: 5px;
      border: none;
    }

    &__process-text {
      margin: 0;
      margin-top: 10px;
      margin-bottom: 10px;
      resize: vertical;
      min-height: 100px;
      max-height: 250px;
      width: 100%;
      border-radius: 10px;
      border: none;

      background-color: aliceblue;
    }

    &__buttons-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }

  .buttons {
    display: flex;
    justify-content: space-around;
    width: 100%;

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

export default ProcessFormStyled;
