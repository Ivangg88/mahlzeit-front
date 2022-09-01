import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  type: "button" | "submit" | "reset";
}

const Button = ({ type, text }: ButtonProps): JSX.Element => {
  return <ButtonStyled type={type}>{text}</ButtonStyled>;
};

export default Button;
