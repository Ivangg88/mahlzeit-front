import styled from "styled-components";

const ButtonStyled = styled.button`
  height: 40px;
  width: 120px;
  background-color: ${(props) => props.theme.secondColor};
  color: ${(props) => props.theme.fontMainColor};
  border-radius: 15px;
  font-size: 18px;
  align-content: center;
  border: none;
  cursor: pointer;
  :disabled {
    background-color: #cfadad;
    color: #191919;
    pointer-events: none;
  }
`;

export default ButtonStyled;
