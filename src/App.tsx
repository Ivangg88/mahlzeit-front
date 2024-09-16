import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "./app/hooks";
import { RootState } from "./app/store";
import useTranslations from "./hooks/useTranslations";
import CreateReciptePage from "./pages/CreateReciptePage/CreateReciptePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MyReciptesPage from "./pages/MyReciptesPage/MyReciptesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import NotLoggedPage from "./pages/NotLoggedPage/NotLoggedPage";

const App = (): JSX.Element => {
  const user = useAppSelector((state: RootState) => state.user);
  const currentLanguage = useAppSelector(
    (state: RootState) => state.i8n.language
  );
  const { loadTranslation, changeLanguage } = useTranslations();

  useEffect(() => {
    const handleLanguageChange = () => {
      changeLanguage(navigator.language);
    };

    window.addEventListener("languagechange", handleLanguageChange);
    loadTranslation(currentLanguage);

    return () => {
      window.removeEventListener("languagechange", handleLanguageChange);
    };
  }, [currentLanguage, loadTranslation, changeLanguage]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage navigateTarget="/" />} />
        <Route path="/error" element={<NotFoundPage error={true} />} />
        <Route path="*" element={<NotFoundPage error={false} />} />
        <Route
          path="/create"
          element={user.isLogged ? <CreateReciptePage /> : <NotLoggedPage />}
        />
        <Route
          path="/myreciptes"
          element={user.isLogged ? <MyReciptesPage /> : <NotLoggedPage />}
        />
      </Routes>
    </>
  );
};

export default App;
