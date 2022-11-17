import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinimize } from "@fortawesome/free-solid-svg-icons";
import RecipteCardStyled from "./DetailCardStyled";
import useReciptes from "../../hooks/useReciptes";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { useEffect, useLayoutEffect } from "react";

const DetailCard = (): JSX.Element => {
  const apiUrl = `${process.env.REACT_APP_API_URL}/reciptes/delete`;
  const { deleteRecipte } = useReciptes();
  const user = useAppSelector((state: RootState) => state.user);
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
    ingredients = item.ingredients.map((ingredient, index) => {
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

    
    processes = item.process.map((process, index) => {
      return <li>{index + 1 + " " + process.process}</li>;
    });

    
  }
  return (
    <RecipteCardStyled>
      {item && (
        <>
          <h1 className="detail-card__title">
            {item.name}

            <button
              aria-label="minimize"
              className="button-icon"
              onClick={() => {
                navigator("/home");
              }}
            >
              <FontAwesomeIcon
                className="detail-card__icon"
                icon={faMinimize}
              />
            </button>
          </h1>
          <img
            src={item.backupImage}
            alt={item.name}
            className="detail-card__image"
          />
          <div className="detail-card__ingredients">
            <h2 className="detail-card__subtitle">Ingredientes</h2>
            <ul>{ingredients}</ul>
          </div>
          <div className="detail-card__process">
            <h2 className="detail-card__subtitle">Procedimiento</h2>
            <ul>{processes}</ul>
          </div>

          <div className="button-container">
            {user.userName === item.autor && (
              <button
                aria-label="delete"
                className="delete-button"
                onClick={() => deleteRecipte(item.id, apiUrl)}
              >
                Eliminar
              </button>
            )}
          </div>
        </>
      )}
    </RecipteCardStyled>
  );
};

export default DetailCard;
