import React, { useState, useEffect, useRef } from "react";
import Header from "../../Header/Header";
import diceSprite from "../../../../public/asset/dice-sprite.png";

function DiceRoller() {
  const [nbDices, setNbDices] = useState(null);
  const [victory, setVictory] = useState(0);
  const [defeat, setDefeat] = useState(0);
  const [ingame, setIngame] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const [counter, setCounter] = useState(3);
  const counterElement = useRef(null);
  const [diceValue, setDiceValue] = useState(1); // Valeur du dé
  const [rolling, setRolling] = useState(false);

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

  const rollDice = () => {
    setRolling(true);
    setTimeout(() => {
      const newValue = Math.floor(Math.random() * 6) + 1; // Générer une nouvelle valeur pour le dé (de 1 à 6)
      setDiceValue(newValue);
      setRolling(false);
    }, 2000); // Temps de l'animation du lancer du dé (2000 ms)
  };

  return (
    <div>
      <Header />
      <div className="game-container bg-orange-400">
        <h1 className="flex justify-center items-center p-4 text-white font-bold">
          Dice Roller
        </h1>
        <div className="dice-container flex justify-center items-center">
          <img
            src={diceSprite}
            alt="Dé"
            className={`dice ${rolling && "rolling"}`}
            style={{ backgroundPosition: `-${(diceValue - 1) * 100}px 0` }}
          />
        </div>
        <button
          onClick={rollDice}
          className="roll-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Lancer les dés
        </button>
        {/* Reste du code... */}
      </div>
    </div>
  );
}

export default DiceRoller;
