import { Recipte } from "../../types/interfaces";
import RecipteCard from "../RecipteCard/RecipteCard";
import RecipteListStyled from "./ReciptesListStyled";

interface ReciptesListProps {
  reciptes: Recipte[];
}
const ReciptesList = ({ reciptes }: ReciptesListProps) => {
  return (
    <RecipteListStyled>
      {reciptes.map((recipte) => (
        <li data-testid="test-list" key={recipte.id}>
          <RecipteCard item={recipte} />
        </li>
      ))}
    </RecipteListStyled>
  );
};

export default ReciptesList;
