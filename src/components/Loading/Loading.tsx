import LoadingStyled from "./LoadingStyled";
import "./LoadingStyled.ts";

const Loading = () => {
  return (
    <>
      <LoadingStyled>
        <img
          className="loading__image"
          src="/images/flork-loading.webp"
          alt="6"
          height={400}
        />
        <div className="container">
          <div className="dash one"></div>
          <div className="dash two"></div>
          <div className="dash three"></div>
          <div className="dash four"></div>
        </div>
        <h1>Loading...</h1>
      </LoadingStyled>
    </>
  );
};

export default Loading;
