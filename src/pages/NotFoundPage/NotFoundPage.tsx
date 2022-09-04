import { NavLink } from "react-router-dom";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): JSX.Element => {
  return (
    <NotFoundPageStyled>
      <img src="/images/flork-error404.png" alt="angry-flork" width={650} />
      <span className="notfound">Error 404</span>
      <span className="notfound">Page not found</span>
      <NavLink className="navigate" to={"/"}>
        Ir a Inicio
      </NavLink>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
