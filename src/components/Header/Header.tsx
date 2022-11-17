import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { logoutUserActionCreator } from "../../store/user/userSlice";
import HeaderStyled from "./HeaderStyled";

const Header = () => {
  const user = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  const logOut = () => {
    dispatch(logoutUserActionCreator());
  };

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
            <NavLink className="navigation__link" to={"/myreciptes"}>
              Mis Recetas
            </NavLink>
          </li>
          <li>
            <NavLink className="navigation__link" to={"/create"}>
              Crear Receta
            </NavLink>
          </li>
          <li>
            {!user.isLogged ? (
              <NavLink className="navigation__link" to={"/login"}>
                Login
              </NavLink>
            ) : (
              <NavLink
                className="navigation__link"
                onClick={logOut}
                to={"/home"}
              >
                Logout
              </NavLink>
            )}
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
