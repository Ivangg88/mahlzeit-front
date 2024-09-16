import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction } from "react";
import PaginationStyled from "./PaginationStyled";

interface PaginationProps {
  paginationText: string;
  currentPage: number;
  totalPages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Pagination = ({
  paginationText,
  currentPage,
  totalPages,
  setCurrentPage,
}: PaginationProps): JSX.Element => {
  const handleBackAction = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  const handleNextAction = () => {
    if (currentPage === totalPages) return;
    setCurrentPage(currentPage + 1);
  };

  return (
    <PaginationStyled>
      <button
        disabled={currentPage === 1}
        className={`pagination__button button-left`}
        onClick={handleBackAction}
      >
        <FontAwesomeIcon className="button__icon" icon={faChevronLeft} />
      </button>
      <span className="pagination__text">{paginationText}</span>
      <button
        disabled={currentPage === totalPages}
        className={`pagination__button button-right `}
        onClick={handleNextAction}
      >
        <FontAwesomeIcon className="button__icon" icon={faChevronRight} />
      </button>
    </PaginationStyled>
  );
};

export default Pagination;
