import styled from "styled-components";

const LanguageSelectorStyled = styled.div`
  position: absolute;
  top: 20px;
  right: 50px;
  align-content: center;
  height: 50px;
  z-index: 1;

  button {
    position: relative;
    all: unset;
    cursor: pointer;
  }

  .select-language-button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header__languages {
    position: relative;
    list-style: none;
    align-self: center;
    justify-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    top: 10px;
    right: -10px;
    padding: 10px;
    margin: 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 1px white;
    -webkit-box-shadow: 0px 0px 5px 1px white;
    -moz-box-shadow: 0px 0px 1px 5px white;
    background-color: ${(props) => props.theme.firstColor};
  }

  .languages-button--current {
    transform: scale(1.2);
  }

  button:hover {
    cursor: pointer;
    transform: scale(1.3);
  }

  @media (min-width: 550px) {
    position: absolute;
    top: 0;
    left: none;
    right: 2%;
    align-content: center;
    height: 50px;
  }
`;

export default LanguageSelectorStyled;
