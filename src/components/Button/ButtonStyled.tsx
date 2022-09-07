import styled from "styled-components";

const ButtonStyled = styled.button`
  height: 40px;
  width: 120px;
  background-color: ${(props) => props.theme.secondColor};
  color: ${(props) => props.theme.fontMainColor};
  border-radius: 15px;
  font-family: ${(props) => props.theme.fontSecondType};
  font-size: 18px;
  align-content: center;
  border: none;
  cursor: pointer;
`;

export default ButtonStyled;
