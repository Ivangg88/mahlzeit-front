import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCircle,
  faMaximize,
  faFileCircleMinus,
} from "@fortawesome/free-solid-svg-icons";
import RecipteCardStyled from "./RecipteCardStyled";
import { Recipte } from "../../types/interfaces";
import useReciptes from "../../hooks/useReciptes";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";

interface ItemCardProps {
  item: Recipte;
}

const RecipteCard = ({ item }: ItemCardProps): JSX.Element => {
  const apiUrl = `${process.env.REACT_APP_API_URL}/reciptes/delete`;
  const urlId = `${process.env.REACT_APP_API_URL}/reciptes/getById`;
  const user = useAppSelector((state: RootState) => state.user);

  const { deleteRecipte, getRecipteById } = useReciptes();

  return (
    <RecipteCardStyled>
      <h1 className="item-card__title">
        {item.name}
        <FontAwesomeIcon
          className="item-card__icon"
          width={20}
          icon={faMaximize}
          onClick={() => {
            getRecipteById(item.id, urlId);
          }}
        ></FontAwesomeIcon>
      </h1>
      <div className="container">
        <img
          src={`${process.env.REACT_APP_API_URL}/${item.image}`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = item.backupImage;
          }}
          alt={item.name}
          className="item-card__image"
          width={165}
          height={165}
        />
        <div className="list-container">
          <ul className="details-list">
            <li className="details-list__detail">
              <FontAwesomeIcon width={5} icon={faCircle}></FontAwesomeIcon>
              <span>{`${item.persons} Personas`}</span>
            </li>
            <li className="details-list__detail">
              <FontAwesomeIcon width={5} icon={faCircle}></FontAwesomeIcon>
              <span>{item.dificulty}</span>
            </li>
          </ul>
          <ul className="info-list">
            <li className="info-list__info">
              <FontAwesomeIcon
                className="info-list__user"
                height={16}
                icon={faUser}
              ></FontAwesomeIcon>
              <span>{item.autor}</span>
            </li>
            {user.userName === item.autor && (
              <li className="info-list__info">
                <FontAwesomeIcon
                  height={16}
                  icon={faFileCircleMinus}
                ></FontAwesomeIcon>
                <button
                  className="button"
                  onClick={() => deleteRecipte(item.id, apiUrl)}
                >
                  Eliminar
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </RecipteCardStyled>
  );
};

export default RecipteCard;
