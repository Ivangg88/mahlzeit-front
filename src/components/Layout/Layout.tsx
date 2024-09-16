import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";
import LayoutStyled from "./LayoutStyled";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { isLoading } = useAppSelector((state: RootState) => state.ui);
  return (
    <LayoutStyled>
      <Header />
      {isLoading ? <Loading /> : children}
    </LayoutStyled>
  );
};

export default Layout;
