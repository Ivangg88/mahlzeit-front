import styled from "styled-components";

const LayoutStyled = styled.div`
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  @media (min-width: 550px) {
    padding: 0;
    padding-bottom: 10px;
  }
`;

export default LayoutStyled;
