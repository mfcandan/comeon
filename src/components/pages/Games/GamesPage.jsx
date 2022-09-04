import { useEffect, useState } from "react";
import { useStore } from "../../../store/store";
import SearchInput from "../../atoms/SearchInput/SearchInput";
import PlayerItem from "../../molecules/PlayerItem/PlayerItem";
import CategoryList from "../../organisms/CategoryList/CategoryList";
import GameList from "../../organisms/GameList/GameList";
import "./gamesPage.scss";

const GamesPage = () => {
  const {
    user,
    logout,
    fetchGames,
    games,
    fetchCategories,
    categories,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
  } = useStore();
  const [filteredGames, setFilteredGames] = useState();

  useEffect(() => {
    user && fetchGames() && fetchCategories();
  }, [user]);

  useEffect(() => {
    setFilteredGames(games);
  }, [games]);

  useEffect(() => {
    if (searchQuery) {
      const tempGames = selectedCategory === 0 ? games : filteredGames;
      const tempGameList = tempGames.filter((game) =>
        game.name.toLowerCase().includes(searchQuery)
      );
      setFilteredGames(tempGameList);
    } else {
      selectedCategory === 0 ? setFilteredGames(games) : filterCategory();
    }
  }, [searchQuery]);

  useEffect(() => {
    if (games) {
      filterCategory();
    }
  }, [selectedCategory]);

  const filterCategory = () => {
    const tempGameList = games.filter((game) =>
      game.categoryIds.includes(selectedCategory)
    );
    setFilteredGames(tempGameList);
    setSearchQuery("");
  };

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
            <SearchInput />
          </div>
        </div>
        <div className="ui grid">
          <GameList games={filteredGames} />
          <CategoryList categories={categories} />
        </div>
      </div>
    </div>
  );
};

export default GamesPage;
