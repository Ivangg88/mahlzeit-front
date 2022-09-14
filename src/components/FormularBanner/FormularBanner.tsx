import FormularBannerStyled from "./FormularBannerStyled";

interface FormularBannerProps {
  currentPage: number;
}

const FormularBanner = ({ currentPage }: FormularBannerProps): JSX.Element => {
  return (
    <FormularBannerStyled>
      <span
        className={`banner__counter ${
          currentPage === 1 ? "banner__counter--active" : ""
        }`}
      >
        1
      </span>
      <span
        className={`banner__counter ${
          currentPage === 2 ? "banner__counter--active" : ""
        }`}
      >
        2
      </span>
      <span
        className={`banner__counter ${
          currentPage === 3 ? "banner__counter--active" : ""
        }`}
      >
        3
      </span>
    </FormularBannerStyled>
  );
};

export default FormularBanner;
