import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const sucessModal = (sucessMessage: string) => {
  toast.success(sucessMessage, { position: toast.POSITION.TOP_CENTER });
};

export const failModal = (failMessage: string) => {
  toast.error(failMessage, {
    position: toast.POSITION.TOP_CENTER,
  });
};
