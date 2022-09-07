import styled from "styled-components";

const HeaderStyled = styled.header`
  width: 400px;
  height: 100px;
  border-radius: 15px;
  border: 1px solid ${(props) => props.theme.fontMainColor};
  color: ${(props) => props.theme.fontMainColor};
  background-color: ${(props) => props.theme.firstColor};
  font-family: ${(props) => props.theme.fontMainType};
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 10px;

  .header__logo {
    background-image: url(/images/logo.png);
    border-radius: 15px;
  }

  .header__text-container {
    flex: 4;
  }

  a:visited,
  a:link,
  a:active {
    text-decoration: none;
    color: ${(props) => props.theme.fontMainColor};
    font-weight: bold;
  }

  .header__title {
    margin: 0;
    text-align: center;
  }

  li {
    list-style: none;
    display: inline;
  }

  .header__navigation {
    display: flex;
    gap: 25px;
  }

  .navigation__link {
    display: flex;
    text-align: center;
  }
`;

export default HeaderStyled;
