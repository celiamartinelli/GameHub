import React, { useState, useEffect } from "react";
import diceSprite from "../../../../public/asset/dice-sprite.png";
import "./DiceRoller.scss";
import Header from "../../Header/Header";

function DiceRoller() {
  const [inGame, setInGame] = useState(false);
  const [nbDices, setNbDices] = useState(1);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [victory, setVictory] = useState(0);
  const [defeat, setDefeat] = useState(0);
  const [ingame, setIngame] = useState(false);

  const startGame = () => {
    setInGame(true);
  };

  const changeNumber = (e) => {
    setNbDices(e.target.value);
  };

  const play = (e) => {
    e.preventDefault();

    if (!ingame) {
      setIngame(true);
      const playerTotal = rollDices();
      setPlayerScore(playerTotal);
      setTimeout(() => dealerPlay(playerTotal), 3000);
    }
  };

  const rollDices = () => {
    let score = 0;
    for (let i = 0; i < nbDices; i++) {
      score += Math.floor(Math.random() * 6) + 1;
    }
    return score;
  };

  const dealerPlay = (playerTotal) => {
    const dealerTotal = rollDices();
    setDealerScore(dealerTotal);
    if (dealerTotal > playerTotal) {
      setDefeat(defeat + 1);
    } else if (dealerTotal < playerTotal) {
      setVictory(victory + 1);
    }
    setIngame(false);
  };

  const Dice = ({ nbDices }) => {
    const dices = [];
    for (let i = 0; i < nbDices; i++) {
      const diceValue = Math.floor(Math.random() * 6) + 1;
      const imageOffset = (diceValue - 1) * 100;
      dices.push(
        <div
          key={i}
          className="dice"
          style={{
            backgroundImage: `url(${diceSprite})`,
            backgroundPosition: `-${imageOffset}px 0`,
            width: "100px",
            height: "100px",
            margin: "1em",
          }}
        ></div>
      );
    }
    return <>{dices}</>;
  };

  return (
    <div>
      <Header />
      <div className="bg-orange-500 min-h-screen flex flex-col items-center">
        <h1 className="text-4xl text-white">Dice Roller</h1>

        {inGame ? (
          <div id="app" className="flex flex-col w-full items-center">
            <div>
              <form id="game-form" onSubmit={play} className="mt-4">
                <input
                  id="dice-number-input"
                  type="number"
                  value={nbDices}
                  onChange={changeNumber}
                  className="px-2 py-1 border bg-white"
                  min="1"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded ml-2"
                >
                  Roll Dice
                </button>
              </form>
            </div>
            <div className="flex flex-row">
              <div id="player" className="board bg-orange-500 w1/2">
                <Dice nbDices={nbDices} />
                <div className="result">
                  <p>Player Score: {playerScore}</p>
                  <p>Wins: {victory}</p>
                </div>
              </div>
              <div id="dealer" className="board bg-orange-600">
                <Dice nbDices={nbDices} />
                <div className="result">
                  <p>Dealer Score: {dealerScore}</p>
                  <p>Losses: {defeat}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div id="welcome" className="text-center">
            <h1 className="text-4xl mb-4">Welcome to Dice Game</h1>
            <button
              id="play"
              onClick={startGame}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Start Game
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default DiceRoller;
