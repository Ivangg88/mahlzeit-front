import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { logoutUserActionCreator } from "../../store/user/userSlice";
import HeaderStyled from "./HeaderStyled";
import { setLanguageActionCreator } from "../../store/i8n/i8nSlice";
import { I8nLanguage, availableLanguages } from "../../utils/i8n/i8n";

const Header = () => {
  const user = useAppSelector((state: RootState) => state.user);
  const { translations, language } = useAppSelector(
    (state: RootState) => state.i8n
  );
  const dispatch = useAppDispatch();

  const logOut = () => {
    dispatch(logoutUserActionCreator());
  };

  const {
    header: { home, login, myRecipes, newRecipe, logout },
  } = translations;

  const languagesButtons = availableLanguages.map((languageObj) => {
    const key = Object.keys(languageObj)[0] as I8nLanguage;
    const value = languageObj[key];

    return (
      <li key={key}>
        <button
          onClick={() => dispatch(setLanguageActionCreator(key))}
          className={`languages-button ${
            key === language ? "languages-button--current" : ""
          }  `}
        >
          <img
            src={value}
            alt={`${key}`}
            height={25}
            className="language-flag"
          />
        </button>
      </li>
    );
  });

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
      </div>
      <ul className="header__languages">{languagesButtons}</ul>
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
