import styled from "styled-components";

const LoadingStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background-color: ${(props) => props.theme.secondColor};
  color: ${(props) => props.theme.fontMainColor};
  font-family: ${(props) => props.theme.fontMainType};
  z-index: 3;
  overflow: auto;

  .loading__image {
    position: relative;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .container {
    display: flex;
    justify-content: center;
  }

  .dash {
    margin: 0 15px;
    width: 35px;
    height: 15px;
    border-radius: 8px;
    background: ${(props) => props.theme.fontMainColor};
    box-shadow: 0 0 10px 0 ${(props) => props.theme.fontMainColor};
  }

  .one {
    margin-right: -18px;
    transform-origin: center left;
    animation: spin 3s linear infinite;
  }

  .two {
    transform-origin: center right;
    animation: spin2 3s linear infinite;
    animation-delay: 0.2s;
  }

  .three {
    transform-origin: center right;
    animation: spin3 3s linear infinite;
    animation-delay: 0.3s;
  }

  .four {
    transform-origin: center right;
    animation: spin4 3s linear infinite;
    animation-delay: 0.4s;
  }

  @media (min-width: 550px) {
    top: 52px;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(360deg);
    }
    30% {
      transform: rotate(370deg);
    }
    35% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin2 {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(0deg);
    }
    30% {
      transform: rotate(-180deg);
    }
    35% {
      transform: rotate(-190deg);
    }
    40% {
      transform: rotate(-180deg);
    }
    78% {
      transform: rotate(-180deg);
    }
    95% {
      transform: rotate(-360deg);
    }
    98% {
      transform: rotate(-370deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }

  @keyframes spin3 {
    0% {
      transform: rotate(0deg);
    }
    27% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(180deg);
    }
    45% {
      transform: rotate(190deg);
    }
    50% {
      transform: rotate(180deg);
    }
    62% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(360deg);
    }
    80% {
      transform: rotate(370deg);
    }
    85% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin4 {
    0% {
      transform: rotate(0deg);
    }
    38% {
      transform: rotate(0deg);
    }
    60% {
      transform: rotate(-360deg);
    }
    65% {
      transform: rotate(-370deg);
    }
    75% {
      transform: rotate(-360deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;
export default LoadingStyled;
