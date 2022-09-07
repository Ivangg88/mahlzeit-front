import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faStar,
  faCircle,
  faMaximize,
} from "@fortawesome/free-solid-svg-icons";
import ItemCardStyled from "./ItemCardStyled";

const ItemCard = (): JSX.Element => {
  return (
    <ItemCardStyled>
      <h1 className="item-card__title">
        Croquetas de pimientos
        <FontAwesomeIcon width={20} icon={faMaximize}></FontAwesomeIcon>
      </h1>
      <div className="container">
        <img
          src="https://dam.cocinafacil.com.mx/wp-content/uploads/2018/06/chiles-jalapenos-rellenos-de-queso.jpg"
          alt="Imagen del item"
          className="item-card__image"
          width={165}
          height={165}
        />
        <div className="list-container">
          <ul className="details-list">
            <li className="details-list__detail">
              <FontAwesomeIcon width={5} icon={faCircle}></FontAwesomeIcon>
              <span>4 Personas</span>
            </li>
            <li className="details-list__detail">
              <FontAwesomeIcon width={5} icon={faCircle}></FontAwesomeIcon>
              <span>Fácil</span>
            </li>
            <li className="details-list__detail">
              <FontAwesomeIcon width={5} icon={faCircle}></FontAwesomeIcon>
              <span>250 Kcal</span>
            </li>
          </ul>
          <ul className="info-list">
            <li className="info-list__info">
              <FontAwesomeIcon
                className="info-list__user"
                height={16}
                icon={faUser}
              ></FontAwesomeIcon>
              <span>Autor</span>
            </li>
            <li className="info-list__info">
              <FontAwesomeIcon height={16} icon={faStar}></FontAwesomeIcon>
              <span>Añadir a favortios</span>
            </li>
          </ul>
        </div>
      </div>
    </ItemCardStyled>
  );
};

export default ItemCard;
