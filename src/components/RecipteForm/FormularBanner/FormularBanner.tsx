import FormularBannerStyled from "./FormularBannerStyled";

interface FormularBannerProps {
  currentPage: number;
  pages: number;
}

const FormularBanner = ({
  currentPage,
  pages,
}: FormularBannerProps): JSX.Element => {
  const pageMarkers: number[] = new Array(pages).fill(1);

  return (
    <FormularBannerStyled>
      {pageMarkers.map((marker, index) => {
        return (
          <span
            role={"note"}
            className={`banner__counter ${
              currentPage === index + 1 ? "banner__counter--active" : ""
            }`}
          >
            {index + 1}
          </span>
        );
      })}
    </FormularBannerStyled>
  );
};

export default FormularBanner;
