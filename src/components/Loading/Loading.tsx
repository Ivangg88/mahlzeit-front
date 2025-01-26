import { useAppSelector } from "../../app/hooks";
import "./LoadingStyled";
import LoadingStyled from "./LoadingStyled";

const Loading = () => {
  const {
    translations: { loading },
  } = useAppSelector((state) => state.i8n);
  return (
    <>
      <LoadingStyled>
        <img
          className="loading__image"
          src="/images/flork-loading.webp"
          alt="6"
          height={300}
        />
        <div className="container">
          <div className="dash one"></div>
          <div className="dash two"></div>
          <div className="dash three"></div>
          <div className="dash four"></div>
        </div>
        <h1>{`${loading}...`}</h1>
      </LoadingStyled>
    </>
  );
};

export default Loading;
