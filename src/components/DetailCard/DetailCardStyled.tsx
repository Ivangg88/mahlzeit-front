import styled from "styled-components";

const DetailCardStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  background-color: ${(props) => props.theme.secondColor};
  color: ${(props) => props.theme.fontMainColor};
  font-family: inherit;
  border-radius: 15px;
  padding: 20px;
  width: 400px;
  margin: 0;

  .detail-card__title {
    font-family: ${(props) => props.theme.fontMainType};
    text-align: center;
    margin: 0;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
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
    cursor: pointer;
  }

  .detail-card__image {
    min-width: 165px;
    min-height: 165px;
    flex: 1;
    border-radius: 10%;
    object-fit: cover;
  }

  .list-container {
    flex: 2;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 30px;
    padding-top: 15px;
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
  }
`;

export default DetailCardStyled;
