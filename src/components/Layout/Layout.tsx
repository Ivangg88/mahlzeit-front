import Header from "../Header/Header";
import LayoutStyled from "./LayoutStyled";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <LayoutStyled>
      <Header />
      {children}
    </LayoutStyled>
  );
};

export default Layout;
