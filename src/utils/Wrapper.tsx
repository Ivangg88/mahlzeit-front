import { Provider } from "react-redux";
import { setupStore } from "../app/store";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}
const store = setupStore();
const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

export default Wrapper;
