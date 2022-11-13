import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinimize } from "@fortawesome/free-solid-svg-icons";
import RecipteCardStyled from "./DetailCardStyled";
import { Ingredient, Recipte } from "../../types/interfaces";
import useReciptes from "../../hooks/useReciptes";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";

interface ItemCardProps {
  item: Recipte;
}

const DetailCard = ({ item }: ItemCardProps): JSX.Element => {
  const apiUrl = `${process.env.REACT_APP_API_URL}/reciptes/delete`;
  const { deleteRecipte } = useReciptes();
  const user = useAppSelector((state: RootState) => state.user);
  const navigator = useNavigate();

  const ingredients = (item.ingredients as Ingredient[]).map((ingredient) => {
    return (
      <>
        <li>
          <ul>
            <li>{ingredient.name}</li>
            <li>{ingredient.quantity}</li>
            <li>{ingredient.quantity}</li>
          </ul>
        </li>
      </>
    );
  });

  const processes = item.process.map((process, index) => {
    return (
      <li>
        <ul>
          <li>{process.process}</li>
          <li>
            <img alt={`process ${index}`} src={`${process.picture}`}></img>{" "}
          </li>
        </ul>
      </li>
    );
  });

  return (
    <RecipteCardStyled>
      <h1 className="detail-card__title">
        {item.name}

        <button
          aria-label="minimize"
          className="button-icon"
          onClick={() => {
            navigator("/home");
          }}
        >
          <FontAwesomeIcon className="detail-card__icon" icon={faMinimize} />
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
    </RecipteCardStyled>
  );
};

export default DetailCard;
