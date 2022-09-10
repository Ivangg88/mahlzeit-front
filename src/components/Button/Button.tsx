import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  type: "button" | "submit" | "reset";
  actionOnClick?: () => void;
}

const Button = ({ type, text, actionOnClick }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled type={type} onClick={actionOnClick}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
