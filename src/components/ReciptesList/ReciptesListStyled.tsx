import styled from "styled-components";

const ReciptesListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0;

  li {
    list-style: none;
  }

  @media (min-width: 450px) {
    max-width: 800px;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    justify-content: center;
  }
`;

export default ReciptesListStyled;
