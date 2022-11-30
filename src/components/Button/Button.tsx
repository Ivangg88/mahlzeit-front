import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  disable?: boolean;
  text: string;
  type: "button" | "submit" | "reset";
  customStyle?: string;
  actionOnClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | (() => void);
}

const Button = ({
  disable,
  type,
  text,
  customStyle,
  actionOnClick,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      className={customStyle}
      type={type}
      onClick={actionOnClick}
      disabled={disable!}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
