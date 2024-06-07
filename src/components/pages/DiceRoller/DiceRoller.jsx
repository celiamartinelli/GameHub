import React, { useState, useEffect, useRef } from "react";
import Header from "../../Header/Header";

function DiceRoller() {
  const [nbDices, setNbDices] = useState(null);
  const [victory, setVictory] = useState(0);
  const [defeat, setDefeat] = useState(0);
  const [ingame, setIngame] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const [counter, setCounter] = useState(3);
  const counterElement = useRef(null);

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);
    changeNumber();

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (counter === 0) {
      deleteCounter();
    }
  }, [counter]);

  const handleKeyUp = (event) => {
    if (event.code === "Space") {
      start();
    }
  };

  const start = () => {
    // Logic to start the game
  };

  const changeNumber = () => {
    // Logic to change the number of dices
  };

  const play = (event) => {
    event.preventDefault();

    if (!ingame) {
      setIngame(true);
      reset();
      setPlayerScore(createAllDices("player"));
      setTimeout(dealerPlay, 3000);
      createCounter();
    }
  };

  const reset = () => {
    // Logic to reset the game
  };

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const createAllDices = (player) => {
    // Logic to create all dices
  };

  const createDice = (player) => {
    // Logic to create a dice
  };

  const dealerPlay = () => {
    // Logic for the dealer to play
  };

  const displayResult = (board, counter) => {
    // Logic to display the result
  };

  const createCounter = () => {
    setCounter(3);
    counterElement.current = document.createElement("div");
    counterElement.current.textContent = counter;
    counterElement.current.className = "counter";
    document.getElementById("app").appendChild(counterElement.current);
  };

  const countdown = () => {
    setCounter(counter - 1);
  };

  const deleteCounter = () => {
    counterElement.current.remove();
  };

  return (
    <div>
      <Header />
      <div className="game-container bg-orange-400">
        <h1 className="flex justify-center items center p-4 text-white font-bold">
          Dice Roller
        </h1>
        <div className="dice-container">
          {/* Ici, vous pourriez mapper sur un tableau d'état représentant vos dés et les afficher */}
        </div>
        <button onClick={play} className="roll-button">
          Lancer les dés
        </button>
        <div className="score-container">
          <p>Score du joueur : {playerScore}</p>
          <p>Victoires : {victory}</p>
          <p>Défaites : {defeat}</p>
        </div>
      </div>
    </div>
  );
}

export default DiceRoller;
