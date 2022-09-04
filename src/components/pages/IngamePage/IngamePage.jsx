import "./ingamePage.scss";
import { useStore } from "../../../store/store";
import { useEffect } from "react";

const IngamePage = () => {
  const { selectedGame, setSelectedGame } = useStore();

  useEffect(() => {
    handleGameStart();
  }, []);

  const handleBack = () => {
    setSelectedGame("");
  };

  const handleGameStart = () => {
    comeon.game.launch(selectedGame.code);
  };

  return (
    <div className="ingamePage">
      <div className="ingame">
        <div className="ui grid centered">
          <div className="three wide column">
            <div
              onClick={() => handleBack()}
              className="ui right floated secondary button inverted"
            >
              <i className="left chevron icon"></i>Back
            </div>
          </div>
          <div className="ten wide column">
            <div id="game-launch"></div>
          </div>
          <div className="three wide column"></div>
        </div>
      </div>
    </div>
  );
};

export default IngamePage;
