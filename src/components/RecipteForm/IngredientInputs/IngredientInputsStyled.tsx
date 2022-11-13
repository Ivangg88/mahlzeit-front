import styled from "styled-components";

export const IngredientInputsStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .ingredient {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 10px;

    &__input {
      min-height: 37px;
      width: 100%;
      padding-left: 5px;
      border: none;
      border-radius: 5px;
      background-color: aliceblue;
    }

    &__label {
      width: 5%;
    }

    &__name {
      width: 70%;
    }

    &__quantity {
      width: 20%;
    }

    &__unit {
      width: 15%;
    }
  }
`;
