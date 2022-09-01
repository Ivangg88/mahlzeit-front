import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): JSX.Element => {
  return (
    <NotFoundPageStyled>
      <img
        src="./angry-flork.webp"
        alt="angry flork"
        width={600}
        height={800}
      />
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
