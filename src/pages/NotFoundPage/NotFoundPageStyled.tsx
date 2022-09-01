import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.secondColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .notfound {
    font-size: 50px;
    font-family: ${(props) => props.theme.fontMainType};
    color: ${(props) => props.theme.fontMainColor};
  }
`;

export default NotFoundPageStyled;
