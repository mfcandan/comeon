import MainLayout from "./components/templates/MainLayout/MainLayout";
import LoginPage from "./components/pages/Login/LoginPage";
import GamesPage from "./components/pages/Games/GamesPage";
import { useEffect, useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    localStorage.getItem("user") &&
      setCurrentUser({
        name: localStorage.getItem("user"),
      });
  }, []);

  useEffect(() => {
    currentUser && localStorage.setItem("user", "fatih");
  }, [currentUser]);

  return (
    <>
      <MainLayout>{currentUser ? <GamesPage /> : <LoginPage />}</MainLayout>
    </>
  );
}

export default App;
