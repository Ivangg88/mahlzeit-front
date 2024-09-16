import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import useUsers from "../../hooks/useUsers";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import HeaderStyled from "./HeaderStyled";

const Header = () => {
  const user = useAppSelector((state: RootState) => state.user);
  const { translations } = useAppSelector((state: RootState) => state.i8n);
  const { logOut } = useUsers();

  const {
    header: { home, login, myRecipes, newRecipe, logout },
  } = translations;

  return (
    <HeaderStyled>
      <img
        src="/images/logo.png"
        alt="Logo mahlzeit"
        height={96}
        className="header__logo header__logo--desktop"
      />
      <LanguageSelector />
      <div className="header__text-container">
        <h1 className="header__title">Mahlzeit</h1>
        <ul className="header__navigation">
          <li>
            <NavLink className="navigation__link" to={"/home"}>
              {home}
            </NavLink>
          </li>
          <li>
            <NavLink className="navigation__link" to={"/myreciptes"}>
              {myRecipes}{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="navigation__link" to={"/create"}>
              {newRecipe}{" "}
            </NavLink>
          </li>
          <li>
            {!user.isLogged ? (
              <NavLink className="navigation__link" to={"/login"}>
                {login}
              </NavLink>
            ) : (
              <NavLink
                className="navigation__link"
                onClick={logOut}
                to={"/home"}
              >
                {logout}
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </HeaderStyled>
  );
};

export default Header;
