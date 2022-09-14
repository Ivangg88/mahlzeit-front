import { useCallback, useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { closeLoadingModalActionCreator } from "../../store/ui/uiSlice";
import { timer } from "../../utils/timers";
import LoadingStyled from "./LoadingStyled";
import "./LoadingStyled.ts";

const Loading = () => {
  const dispatch = useAppDispatch();

  const handleClose = useCallback(() => {
    dispatch(closeLoadingModalActionCreator());
  }, [dispatch]);

  useEffect(() => {
    const time = setTimeout(() => {
      handleClose();
    }, timer.close);
    return () => {
      clearTimeout(time);
    };
  }, [handleClose]);

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
        <h1>Loading...</h1>
      </LoadingStyled>
    </>
  );
};

export default Loading;
