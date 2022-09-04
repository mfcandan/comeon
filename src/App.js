import MainLayout from "./components/templates/MainLayout/MainLayout";
import LoginPage from "./components/pages/Login/LoginPage";
import GamesPage from "./components/pages/Games/GamesPage";
import { useEffect } from "react";
import { useStore } from "../src/store/store";
import IngamePage from "./components/pages/IngamePage/IngamePage";

function App() {
  const { user, setUser, selectedGame } = useStore();

  useEffect(() => {
    localStorage.getItem("user") &&
      setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <>
      <MainLayout>
        {user ? !selectedGame ? <GamesPage /> : <IngamePage /> : <LoginPage />}
      </MainLayout>
    </>
  );
}

export default App;
