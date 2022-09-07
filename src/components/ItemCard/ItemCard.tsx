import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faStar,
  faCircle,
  faMaximize,
} from "@fortawesome/free-solid-svg-icons";
import ItemCardStyled from "./ItemCardStyled";
import { Item } from "../../types/interfaces";

interface ItemCardProps {
  item: Item;
}

const ItemCard = ({ item }: ItemCardProps): JSX.Element => {
  return (
    <ItemCardStyled>
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
          src={item.image}
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
    </ItemCardStyled>
  );
};

export default ItemCard;
