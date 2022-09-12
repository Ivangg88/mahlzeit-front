import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import RecipteCard from "../RecipteCard/RecipteCard";
import RecipteListStyled from "./ReciptesListStyled";

const ReciptesList = () => {
  const items = useAppSelector((state: RootState) => state.reciptes);

  return (
    <RecipteListStyled>
      {items.map((item) => (
        <li data-testid="test-list" key={item.name}>
          <RecipteCard item={item} />
        </li>
      ))}
    </RecipteListStyled>
  );
};

export default ReciptesList;
