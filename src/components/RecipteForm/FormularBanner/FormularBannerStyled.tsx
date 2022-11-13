import styled from "styled-components";

const FormularBannerStyled = styled.section`
  width: 360px;
  display: flex;
  justify-content: space-between;
  font-family: ${(props) => props.theme.fontMainType};

  .banner__counter {
    text-align: center;
    font-size: 25px;
    color: #dddddd;
  }

  .banner__counter--active {
    color: #330000;
  }
`;

export default FormularBannerStyled;
