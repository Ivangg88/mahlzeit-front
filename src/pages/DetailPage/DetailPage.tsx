import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import DetailCard from "../../components/DetailCard/DetailCard";
import Header from "../../components/Header/Header";
import DetailPageStyled from "./DetailPageStyled";

const DetailPage = () => {
  const items = useAppSelector((state: RootState) => state.reciptes);
  return (
    <DetailPageStyled>
      <Header />
      <DetailCard item={items[0]} />
    </DetailPageStyled>
  );
};

export default DetailPage;
