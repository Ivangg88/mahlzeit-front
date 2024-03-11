import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinimize } from "@fortawesome/free-solid-svg-icons";
import RecipteCardStyled from "./DetailCardStyled";
import useReciptes from "../../hooks/useReciptes";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { useLayoutEffect } from "react";

const DetailCard = (): JSX.Element => {
  const apiUrl = `${process.env.REACT_APP_API_URL}/reciptes/delete`;
  const { deleteRecipte } = useReciptes();
  const user = useAppSelector((state: RootState) => state.user);
  const {
    delete: deleteText,
    ingredients: ingredientsText,
    process: processText,
  } = useAppSelector((state: RootState) => state.i8n.translations.card);

  const navigator = useNavigate();

  const { getRecipteById } = useReciptes();
  const { id } = useParams();
  const urlId = `${process.env.REACT_APP_API_URL}/reciptes/getById`;

  useLayoutEffect(() => {
    getRecipteById(id!, urlId);
  }, [id, getRecipteById, urlId]);

  const items = useAppSelector((state: RootState) => state.reciptes);

  const item = items[0];
  let ingredients;
  let processes;

  if (item) {
    ingredients = item.ingredients.map((ingredient) => {
      return (
        <>
          <li>
            <span>{ingredient.name}</span>
            <span>{ingredient.quantity}</span>
            <span>{ingredient.unit}</span>
          </li>
        </>
      );
    });

    processes = item.process.map(({ process }) => {
      return (
        <li key={process}>
          <span>{process}</span>
        </li>
      );
    });
  }
  return (
    <RecipteCardStyled>
      {item && (
        <>
          <FontAwesomeIcon
            className="detail-card__icon"
            icon={faMinimize}
            onClick={() => {
              navigator(-1);
            }}
          />

          <h1 className="detail-card__title detail-card__title--mobile">
            {item.name}
          </h1>

          <img
            src={item.backupImage}
            alt={item.name}
            className="detail-card__image"
          />

          <h1 className="detail-card__title detail-card__title--desktop">
            {item.name}
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
            {user.userName === item.autor && (
              <button
                aria-label="delete"
                className="delete-button"
                onClick={() => deleteRecipte(item.id, apiUrl)}
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
