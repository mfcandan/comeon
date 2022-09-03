import "./gamesPage.scss";
import { useStore } from "../../../store/store";
import { useEffect } from "react";
import GameItem from "../../molecules/GameItem/GameItem";
import CategoryItem from "../../molecules/CategoryItem/CategoryItem";
import PlayerItem from "../../molecules/PlayerItem/PlayerItem";

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
          <div className="twelve wide column">
            <h3 className="ui dividing header">Games</h3>
            <div className="ui relaxed divided game items links">
              {games &&
                games.map((game) => <GameItem key={game.name} game={game} />)}
            </div>
          </div>
          <div className="four wide column">
            <h3 className="ui dividing header">Categories</h3>
            <div className="ui selection animated list category items">
              {categories &&
                categories.map((category) => (
                  <CategoryItem key={category.id} category={category} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesPage;
