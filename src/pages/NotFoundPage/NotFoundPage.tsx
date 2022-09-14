import { NavLink } from "react-router-dom";
import NotFoundPageStyled from "./NotFoundPageStyled";

interface NotFoundPageProps {
  error: boolean;
}

const NotFoundPage = ({ error }: NotFoundPageProps): JSX.Element => {
  return (
    <NotFoundPageStyled>
      <img src="/images/flork-error404.png" alt="angry-flork" width={350} />
      <div className="container">
        <span className="notfound">
          {error === false ? "Error 404" : "Error general"}
        </span>
        <span className="message">
          {error === false
            ? "Página no encontrada"
            : "No se encuentra el recurso"}
        </span>
        <NavLink className="navigate" to={"/"}>
          Ir a Inicio
        </NavLink>
      </div>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
