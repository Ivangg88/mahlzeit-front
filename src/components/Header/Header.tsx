import { NavLink } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="header__text-container">
        <h1 className="header__title">Mahlzeit</h1>
        <ul className="header__navigation">
          <li>
            <NavLink className="navigation__link" to={"/home"}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink className="navigation__link" to={"/my-reciptes"}>
              Mis Recetas
            </NavLink>
          </li>
          <li>
            <NavLink className="navigation__link" to={"/create"}>
              Crear Receta
            </NavLink>
          </li>
          <li>
            <NavLink className="navigation__link" to={"/login"}>
              Login
            </NavLink>
          </li>
        </ul>
      </div>
      <img
        src="/images/logo.png"
        alt="Logo mahlzeit"
        height={96}
        className="header__logo"
      />
    </HeaderStyled>
  );
};

export default Header;
