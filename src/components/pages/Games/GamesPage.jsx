import { useEffect } from "react";
import { useStore } from "../../../store/store";
import GameItem from "../../molecules/GameItem/GameItem";
import PlayerItem from "../../molecules/PlayerItem/PlayerItem";
import CategoryList from "../../organisms/CategoryList/CategoryList";
import GameList from "../../organisms/GameList/GameList";
import "./gamesPage.scss";

const GamesPage = () => {
  const { user, logout, fetchGames, games, fetchCategories, categories } =
    useStore();

  useEffect(() => {
    user && fetchGames() && fetchCategories();
  }, [user]);

  const handleLogout = () => {
    logout(user.username);
  };

  return (
    <div className="gamesPage">
      <div className="casino">
        <div className="ui grid centered">
          <div className="twelve wide column">
            <div className="ui list">
              <PlayerItem player={user} />
            </div>
            <div
              onClick={() => handleLogout()}
              className="logout ui left floated secondary button inverted"
            >
              <i className="left chevron icon"></i>Log Out
            </div>
          </div>
          <div className="four wide column">
            <div className="search ui small icon input">
              <input type="text" placeholder="Search Game" />
              <i className="search icon"></i>
            </div>
          </div>
        </div>
        <div className="ui grid">
          <GameList games={games} />
          <CategoryList categories={categories} />
        </div>
      </div>
    </div>
  );
};

export default GamesPage;
