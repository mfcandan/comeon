import MainLayout from "./components/templates/MainLayout/MainLayout";
import LoginPage from "./components/pages/Login/LoginPage";
import GamesPage from "./components/pages/Games/GamesPage";
import { useEffect } from "react";
import { useStore } from "../src/store/store";

function App() {
  const { user, setUser } = useStore();

  useEffect(() => {
    localStorage.getItem("user") &&
      setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <>
      <MainLayout>{user ? <GamesPage /> : <LoginPage />}</MainLayout>
    </>
  );
}

export default App;
