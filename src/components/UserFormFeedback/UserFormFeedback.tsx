import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinBeamSweat } from "@fortawesome/free-solid-svg-icons";
import UserFormFeedbackStyled from "./UserFormFeedbackStyled";

interface UserFormFeedbackProps {
  text:
    | "Mínimo 8 caracteres"
    | "Las contraseñas no coinciden"
    | "Usuario o contraseña incorrectos";
  isActive: boolean;
}

const UserFormFeedback = ({ text, isActive }: UserFormFeedbackProps) => {
  return (
    <UserFormFeedbackStyled>
      <div
        className={`input__feedback ${
          isActive ? "" : "input__feedback--hidden"
        }`}
      >
        <FontAwesomeIcon className="input__icon" icon={faFaceGrinBeamSweat} />
        <span className="input__text">{text}</span>
      </div>
    </UserFormFeedbackStyled>
  );
};

export default UserFormFeedback;
