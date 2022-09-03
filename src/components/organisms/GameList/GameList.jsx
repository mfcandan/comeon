import GameItem from "../../molecules/GameItem/GameItem";

const GameList = ({ games }) => {
  return (
    <div className="twelve wide column">
      <h3 className="ui dividing header">Games</h3>
      <div className="ui relaxed divided game items links">
        {games && games.map((game) => <GameItem key={game.name} game={game} />)}
      </div>
    </div>
  );
};

export default GameList;
