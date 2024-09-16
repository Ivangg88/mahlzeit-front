import { NavLink } from "react-router-dom";
import NotLoggedPageStyled from "./NotLoggedPageStyled";
import Layout from "../../components/Layout/Layout";

const NotLoggedPage = (): JSX.Element => {
  return (
    <Layout>
      <NotLoggedPageStyled>
        <NavLink className={"return-link"} to={"/"}>
          {"< Atrás"}
        </NavLink>
        <img src="/images/flork-error404.png" alt="angry-flork" width={350} />
        <div className="container">
          <span className="notfound">No autorizado</span>
          <span className="message">
            Acceso restringido a usuarios logueados
          </span>
          <div className="links-container">
            <NavLink className="navigate" to={"/login"}>
              Ir a login
            </NavLink>
            o
            <NavLink className="navigate" to={"/register"}>
              Ir a registrar
            </NavLink>
          </div>
        </div>
      </NotLoggedPageStyled>
    </Layout>
  );
};

export default NotLoggedPage;
