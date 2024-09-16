import styled from "styled-components";

const LayoutStyled = styled.div`
  width: 100%;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4ebeb;

  button:disabled {
    color: ${(props) => props.theme.disabledFontColor};
    background-color: ${(props) => props.theme.disabledColor};
  }

  @media (min-width: 550px) {
    padding-bottom: 10px;
  }
`;

export default LayoutStyled;
