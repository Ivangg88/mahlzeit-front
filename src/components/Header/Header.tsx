import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { logoutUserActionCreator } from "../../store/user/userSlice";
import HeaderStyled from "./HeaderStyled";
import { setLanguageActionCreator } from "../../store/i8n/i8nSlice";
import { availableLanguages } from "../../utils/i8n/i8n";

const Header = () => {
  const user = useAppSelector((state: RootState) => state.user);
  const { translations } = useAppSelector((state: RootState) => state.i8n);
  const dispatch = useAppDispatch();

  const logOut = () => {
    dispatch(logoutUserActionCreator());
  };

  const {
    header: { home, login, myRecipes, newRecipe, logout },
  } = translations;

  const languagesButtons = availableLanguages.map((language) => (
    <li>
      <button
        onClick={() => dispatch(setLanguageActionCreator(language))}
        className="languages-button"
      >
        {language.toUpperCase()}
      </button>
    </li>
  ));
  return (
    <HeaderStyled>
      <img
        src="/images/logo.png"
        alt="Logo mahlzeit"
        height={96}
        className="header__logo header__logo--desktop"
      />
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
        <ul className="header__languages">{languagesButtons}</ul>
      </div>
      <img
        src="/images/logo.png"
        alt="Logo mahlzeit"
        height={96}
        className="header__logo header__logo--mobile"
      />
    </HeaderStyled>
  );
};

export default Header;
