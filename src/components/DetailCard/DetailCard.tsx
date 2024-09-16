import { faMinimize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import useReciptes from "../../hooks/useReciptes";
import { Recipte } from "../../types/interfaces";
import RecipteCardStyled from "./DetailCardStyled";

interface DetailCardProps {
  recipteDetail: Recipte;
}

const DetailCard = ({ recipteDetail }: DetailCardProps): JSX.Element => {
  const apiUrl = `${process.env.REACT_APP_API_URL}/reciptes/delete`;
  const { deleteRecipte } = useReciptes();
  const user = useAppSelector((state: RootState) => state.user);
  const {
    delete: deleteText,
    ingredients: ingredientsText,
    process: processText,
  } = useAppSelector((state: RootState) => state.i8n.translations.card);
  const navigator = useNavigate();

  let ingredients;
  let processes;

  if (recipteDetail) {
    ingredients = recipteDetail.ingredients.map((ingredient) => {
      return (
        <>
          <li key={ingredient.name + ingredient.quantity + ingredient.unit}>
            <span>{ingredient.name}</span>
            <span>{ingredient.quantity}</span>
            <span>{ingredient.unit}</span>
          </li>
        </>
      );
    });

    processes = recipteDetail.process.map(({ process }) => {
      return (
        <li key={process}>
          <span>{process}</span>
        </li>
      );
    });
  }
  return (
    <RecipteCardStyled>
      {recipteDetail && (
        <>
          <h1 className="detail-card__title detail-card__title--mobile">
            {recipteDetail.name}{" "}
            <FontAwesomeIcon
              icon={faMinimize}
              onClick={() => {
                navigator(-1);
              }}
            />
          </h1>

          <img
            src={recipteDetail.backupImage}
            alt={recipteDetail.name}
            className="detail-card__image"
          />

          <h1 className="detail-card__title detail-card__title--desktop">
            {recipteDetail.name}
            <FontAwesomeIcon
              icon={faMinimize}
              onClick={() => {
                navigator(-1);
              }}
            />
          </h1>

          <div className="detail-card__details">
            <div className="detail-card__ingredients">
              <h2 className="detail-card__subtitle">{ingredientsText} </h2>
              <ul>{ingredients}</ul>
            </div>

            <div className="detail-card__process">
              <h2 className="detail-card__subtitle">{processText}</h2>
              <ol>{processes}</ol>
            </div>
          </div>

          <div className="button-container">
            {user.userName === recipteDetail.autor && (
              <button
                aria-label="delete"
                className="delete-button"
                onClick={() => deleteRecipte(recipteDetail.id, apiUrl)}
              >
                {deleteText}
              </button>
            )}
          </div>
        </>
      )}
    </RecipteCardStyled>
  );
};

export default DetailCard;
