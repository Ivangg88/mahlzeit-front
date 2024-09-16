import styled from "styled-components";

const HeaderStyled = styled.header`
  width: 100%;
  border-radius: 15px;
  border: 1px solid ${(props) => props.theme.fontMainColor};
  color: ${(props) => props.theme.fontMainColor};
  background-color: ${(props) => props.theme.firstColor};
  font-family: ${(props) => props.theme.fontMainType};
  display: flex;
  justify-content: space-between;
  gap: 10px;

  .header__logo {
    background-image: url(/images/logo.png);
    border-radius: 15px;

    &--desktop {
      display: none;
    }
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

  @media (min-width: 550px) {
    width: 100%;
    min-width: 480px;
    height: auto;
    border: none;
    border-bottom: 2px solid #330000;
    border-radius: 0;
    padding-left: 10px;
    font-size: 1.2rem;

    .header__text-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: auto;
      padding: 0;
    }

    .header__navigation {
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin: 0;
      padding: 0px 40px;
    }

    .header__logo {
      &--mobile {
        display: none;
      }
    }
  }
`;

export default HeaderStyled;
