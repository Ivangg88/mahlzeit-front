import styled from "styled-components";

const MyReciptesPageStyled = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  @media (min-width: 450px) {
    width: 100%;
    padding: 0;
  }
`;

export default MyReciptesPageStyled;
