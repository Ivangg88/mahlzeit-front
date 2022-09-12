import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faStar,
  faCircle,
  faMaximize,
} from "@fortawesome/free-solid-svg-icons";
import RecipteCardStyled from "./RecipteCardStyled";
import { Recipte } from "../../types/interfaces";

interface ItemCardProps {
  item: Recipte;
}

const RecipteCard = ({ item }: ItemCardProps): JSX.Element => {
  return (
    <RecipteCardStyled>
      <h1 className="item-card__title">
        {item.name}
        <FontAwesomeIcon
          className="item-card__icon"
          width={20}
          icon={faMaximize}
        ></FontAwesomeIcon>
      </h1>
      <div className="container">
        <img
          src={`${process.env.REACT_APP_API_URL}/${item.image}` as string}
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
            <li className="info-list__info">
              <FontAwesomeIcon height={16} icon={faStar}></FontAwesomeIcon>
              <button className="button">Añadir a favoritos</button>
            </li>
          </ul>
        </div>
      </div>
    </RecipteCardStyled>
  );
};

export default RecipteCard;
