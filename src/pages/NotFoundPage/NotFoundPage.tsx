import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): JSX.Element => {
  return (
    <NotFoundPageStyled>
      <span className="notfound">Error 404</span>
      <span className="notfound">Page not found</span>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
