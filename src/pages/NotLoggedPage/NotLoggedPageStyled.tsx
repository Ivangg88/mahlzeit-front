import styled from "styled-components";

const NotLoggedPageStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.secondColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.fontMainColor};

  .return-link {
    position: absolute;
    top: 20px;
    left: 50px;
    color: inherit;
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;
  }

  .container {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .notfound {
    font-size: 50px;
    font-family: ${(props) => props.theme.fontMainType};
    text-align: center;
  }

  .message {
    font-size: 30px;
    text-align: center;
  }

  .links-container {
    display: flex;
    gap: 20px;
    align-items: center;
    font-weight: bold;
    font-size: 25px;
  }
  .navigate {
    color: inherit;
    font-style: normal;
  }
  .navigate:hover {
    scale: 1.1;
  }
`;

export default NotLoggedPageStyled;
