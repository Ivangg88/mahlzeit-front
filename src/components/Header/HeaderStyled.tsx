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
    justify-content: space-around;
    gap: 25px;
    padding-left: 10px;
  }

  .navigation__link {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }

  a.active {
    color: #a00043;
    font-size: 120%;
  }

  @media (min-width: 450px) {
    width: 100%;
    border: none;
    border-radius: 0;
    padding-left: 20px;
    font-size: 1.2rem;

    .header__text-container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex: 1;
    }

    .header__navigation {
      display: flex;
      justify-content: flex-start;
      gap: 20px;
      padding: 0px 40px;
    }

    .header__logo {
      background-image: url(/images/logo.png);
      border-radius: 15px;
      float: left;
    }
  }
`;

export default HeaderStyled;
