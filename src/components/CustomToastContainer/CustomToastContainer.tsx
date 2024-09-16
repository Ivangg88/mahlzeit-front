import { ToastContainer, Zoom } from "react-toastify";
import CustomToastContainerStyled from "./CustomToastContainerStyled";

const CustomToastContainer = (): JSX.Element => {
  return (
    <CustomToastContainerStyled>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
    </CustomToastContainerStyled>
  );
};

export default CustomToastContainer;
