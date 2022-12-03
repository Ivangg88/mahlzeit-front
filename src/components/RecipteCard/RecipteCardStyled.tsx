import styled from "styled-components";

const RecipteCardStyled = styled.section`
  width: 100%;
  border-radius: 15px;
  position: relative;
  display: flex;
  padding: 20px;
  font-family: inherit;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.secondColor};
  color: ${(props) => props.theme.fontMainColor};
  margin: 0;
  cursor: pointer;

  .item-card__title {
    font-family: ${(props) => props.theme.fontMainType};
    text-align: center;
    margin: 0;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }
  .item-card__title--desktop {
    display: none;
  }

  .container {
    display: flex;
    gap: 15px;
    justify-content: space-between;
    align-items: center;
  }

  .item-card__image {
    min-width: 165px;
    min-height: 165px;
    border-radius: 50%;
    object-fit: cover;
  }

  .info-list__user {
    width: 16px;
  }

  .details-list {
    padding: 0;
    list-style: none;
  }

  .details-list__detail {
    display: flex;
    gap: 10px;
  }

  .info-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 5px;
  }

  .info-list__info {
    display: flex;
    gap: 10px;
  }

  .button {
    background-color: ${(props) => props.theme.secondColor};
    color: ${(props) => props.theme.fontMainColor};
    border: none;
    text-decoration: underline;
    cursor: pointer;
  }

  .button:hover {
    background-color: ${(props) => props.theme.firstColor};
  }

  .list-container {
    width: 100%;
    height: auto;
    flex: none;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    padding-bottom: 20px;
  }

  @media (min-width: 450px) {
    justify-content: flex-start;
    border-radius: 5%;
    padding: 0;
    height: auto;
    min-height: 460px;
    width: 250px;
    margin: 0;
    gap: 5px;

    .container {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 15px;
      justify-content: flex-start;
      align-items: center;
    }

    .item-card__title {
      width: 100%;
      height: auto;
      margin: 0;
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      align-self: center;
      align-items: center;
    }

    .item-card__title--mobile {
      display: none;
    }

    .item-card__image {
      width: 100%;
      border-radius: 0;
      object-fit: cover;
      min-height: 230px;
      max-height: 230px;
      cursor: pointer;
    }
  }
`;

export default RecipteCardStyled;
