import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "./app/hooks";
import { RootState } from "./app/store";
import Loading from "./components/Loading/Loading";
import CreateReciptePage from "./pages/CreateReciptePage/CreateReciptePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RegisterPage from "./pages/ResgisterPage/RegisterPage";
const App = (): JSX.Element => {
  const user = useAppSelector((state: RootState) => state.user);
  const ui = useAppSelector((state: RootState) => state.ui);

  return (
    <>
      {ui.isLoading && <Loading />}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/create"
          element={
            user.isLogged ? <CreateReciptePage /> : <Navigate to="/login" />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
