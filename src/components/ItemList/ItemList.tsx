import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import useItems from "../../hooks/useItems";
import ItemCard from "../ItemCard/ItemCard";
import ItemListStyled from "./ItemListStyled";

const ItemList = () => {
  const apiUrl = `${process.env.REACT_APP_API_URL}/items/getAll`;
  const { getItems } = useItems();

  useEffect(() => {
    (async () => {
      await getItems(apiUrl);
    })();
  }, [getItems, apiUrl]);

  const items = useAppSelector((state: RootState) => state.itemReducer);

  return (
    <ItemListStyled>
      {items.map((item) => (
        <li data-testid="test-list" key={item.name}>
          <ItemCard item={item} />
        </li>
      ))}
    </ItemListStyled>
  );
};

export default ItemList;
