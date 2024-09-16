import styled from "styled-components";

const PaginationStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  min-width: 350px;
  margin-bottom: 20px;
  height: 40px;
  color: ${(props) => props.theme.fontMainColor};
  font-size: 1.2rem;

  .pagination__button {
    box-sizing: border-box;
    width: 50px;
    height: 100%;
    background-color: ${(props) => props.theme.secondColor};
    color: #330000;
    font-size: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
  }

  .button__icon {
    height: 20px;
  }

  .pagination__button:hover {
    scale: 1.2;
  }

  .button-left {
    border-radius: 20px 0 0 20px;
  }

  .button-right {
    border-radius: 0 20px 20px 0;
  }

  @media (min-width: 550px) {
    width: 50%;
    min-width: 400px;
    .pagination__button {
      width: 50px;
      font-size: 32px;
    }
  }
`;

export default PaginationStyled;
