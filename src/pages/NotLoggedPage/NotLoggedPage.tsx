import { NavLink } from "react-router-dom";
import NotLoggedPageStyled from "./NotLoggedPageStyled";
import Layout from "../../components/Layout/Layout";
import { useAppSelector } from "../../app/hooks";

const NotLoggedPage = (): JSX.Element => {
  const {
    translations: {
      notLoggedPage: { loginLink, notAuthMessage, notAuthTitle, registerLink },
      recipeForm: { backButton },
    },
  } = useAppSelector((state) => state.i8n);

  return (
    <Layout>
      <NotLoggedPageStyled>
        <NavLink className={"return-link"} to={"/"}>
          {`<- ${backButton}`}
        </NavLink>
        <img src="/images/flork-error404.png" alt="angry-flork" width={350} />
        <div className="container">
          <span className="notfound">{notAuthTitle}</span>
          <span className="message">{notAuthMessage}</span>
          <div className="links-container">
            <NavLink className="navigate" to={"/login"}>
              {loginLink}
            </NavLink>
            <NavLink className="navigate" to={"/register"}>
              {registerLink}
            </NavLink>
          </div>
        </div>
      </NotLoggedPageStyled>
    </Layout>
  );
};

export default NotLoggedPage;
