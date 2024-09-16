import styled from "styled-components";

const DetailCardStyled = styled.section`
  position: relative;
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
  margin-top: 10px;

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
    width: 100%;

    &--desktop {
      display: none;
    }
  }

  .detail-card__subtitle {
    font-size: 1.5rem;
    text-align: center;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    font-family: ${(props) => props.theme.fontMainType};
  }

  .detail-card__icon {
    position: absolute;
    height: 25px;
    top: 10px;
    left: 10px;
    width: 25px;
    color: gray;
    cursor: pointer;
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

  .detail-card__icon:hover {
    box-sizing: content-box;
    scale: 1.2;
    padding: 5px;
    border: 1px solid ${(props) => props.theme.fontMainColor};
  }

  @media (min-width: 450px) {
    position: relative;
    padding: 0;
    width: 60%;
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
        width: 35px;
        height: 35px;
      }

      &__title {
        font-family: ${(props) => props.theme.fontMainType};
        text-align: center;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        width: 100%;

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
        padding: 0 20px;
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
