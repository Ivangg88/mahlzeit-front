import styled from "styled-components";

const ItemCardStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.secondColor};
  color: ${(props) => props.theme.fontMainColor};
  border-radius: 15px;
  padding: 20px;
  width: 400px;
  height: 230px;
  margin: 0;

  .item-card__title {
    text-align: center;
    margin: 0;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }

  .item-card__icon {
    cursor: pointer;
  }

  .container {
    display: flex;
    gap: 15px;
    justify-content: space-between;
    align-items: center;
  }

  .item-card__image {
    flex: 1;
    border-radius: 100%;
  }

  .list-container {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 30px;
    padding-top: 15px;
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
    gap: 15px;
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
`;

export default ItemCardStyled;
