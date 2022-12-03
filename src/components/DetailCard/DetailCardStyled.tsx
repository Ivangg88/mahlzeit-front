import styled from "styled-components";

const DetailCardStyled = styled.section`
  display: flex;
  width: 100%;
  max-width: 400px;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  background-color: ${(props) => props.theme.secondColor};
  color: ${(props) => props.theme.fontMainColor};
  font-family: inherit;
  border-radius: 15px;
  padding: 20px;
  margin: 0;

  li > span {
    margin-right: 5px;
  }
  ul,
  ol {
    padding-left: 15px;
    margin: 0;
  }
  ol {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .detail-card__title {
    font-family: ${(props) => props.theme.fontMainType};
    text-align: center;
    margin: 0;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;

    &--desktop {
      display: none;
    }
  }

  .detail-card__subtitle {
    font-size: 1.5rem;
    text-align: center;
    margin: 0;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }

  .detail-card__icon {
    color: inherit;
    cursor: pointer;
    height: 100%;
  }

  .detail-card__image {
    min-width: 165px;
    min-height: 165px;
    flex: 1;
    border-radius: 10%;
    object-fit: cover;
  }

  .button-icon {
    border: none;
    padding: 0;
    background-color: transparent;
    width: 20px;
    height: 20px;
  }

  .button-container {
    align-content: center;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .delete-button {
    height: 40px;
    width: 120px;
    background-color: ${(props) => props.theme.firstColor};
    color: ${(props) => props.theme.fontMainColor};
    border-radius: 15px;
    font-size: 18px;
    align-content: center;
    border: none;
    cursor: pointer;
    margin-bottom: 20px;
  }

  @media (min-width: 450px) {
    position: relative;
    padding: 0;
    width: 30%;
    min-width: 375px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-family: inherit;

    .detail-card {
      &__icon {
        position: absolute;
        width: 35px;
        height: 35px;
        top: 10px;
        right: 10px;
        color: ${(props) => props.theme.firstColor};
      }

      &__title {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        padding: 5px 20px;

        margin: 0;
        font-size: 2rem;

        &--mobile {
          display: none;
        }
      }

      &__image {
        border-radius: 0;
        flex: none;
        object-fit: cover;
        overflow: hidden;
        max-width: fit-content;
        width: 100%;
      }

      &__details {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
      }

      &__ingredients,
      &__process {
        width: 100%;
        flex: 1;
        line-height: 1.5;
        padding: 20px;
      }

      &__process {
        flex: 2;
      }

      &__subtitle {
        font-family: ${(props) => props.theme.fontMainType};
        display: block;
        justify-content: space-between;
        text-align: start;
      }
    }
  }
`;

export default DetailCardStyled;
