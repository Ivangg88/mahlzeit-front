import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  type: "button" | "submit" | "reset";
  customStyle?: string;
  actionOnClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | (() => void);
}

const Button = ({
  type,
  text,
  customStyle,
  actionOnClick,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled className={customStyle} type={type} onClick={actionOnClick}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
