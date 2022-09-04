import styled from "styled-components";

const UserFormFeedbackStyled = styled.div`
  .input__feedback {
    display: flex;
    justify-content: center;
    gap: 15px;
    color: #ca0606;

    &--hidden {
      color: transparent;
    }
  }
`;

export default UserFormFeedbackStyled;
