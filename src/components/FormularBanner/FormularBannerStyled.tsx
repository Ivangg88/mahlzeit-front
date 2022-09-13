import styled from "styled-components";

const FormularBannerStyled = styled.section`
  width: 80%;
  display: flex;
  justify-content: space-between;

  .banner__counter {
    border: 1px solid black;
    border-radius: 100%;
    padding: 10px;
    text-align: center;
  }

  .banner__counter--active {
    background-color: grey;
  }
`;

export default FormularBannerStyled;
