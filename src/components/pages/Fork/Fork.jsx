import React, { useState, useEffect } from "react";
import Header from "../../Header/Header";

export default function NumberGuessingGame() {
  const [max] = useState(500);
  const [searchedNumber, setSearchedNumber] = useState(
    Math.floor(Math.random() * max)
  );
  const [enteredNumber, setEnteredNumber] = useState("");
  const [attempt, setAttempt] = useState(1);
  const [message, setMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setSearchedNumber(Math.floor(Math.random() * max));
  }, [max]);

  const handleInputChange = (e) => {
    setEnteredNumber(e.target.value);
  };

  const handleGuess = () => {
    const number = parseInt(enteredNumber, 10);
    if (isNaN(number)) {
      setMessage("Veuillez entrer un nombre valide.");
      return;
    }

    if (number === searchedNumber) {
      setMessage(
        <h2 className="text-4xl">
          Bravo ! C'était bien {searchedNumber} - Nombre d'essais : {attempt}
        </h2>
      );
      setGameOver(true);
    } else if (number < searchedNumber) {
      setMessage(<h2 className="text-4xl">C'est plus Grand 🚀!</h2>);
    } else {
      setMessage(<h2 className="text-4xl">C'est plus petit 👇!</h2>);
    }

    setAttempt(attempt + 1);
    setEnteredNumber("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleGuess();
    }
  };

  const handleReset = () => {
    setSearchedNumber(Math.floor(Math.random() * max));
    setEnteredNumber("");
    setAttempt(1);
    setMessage("");
    setGameOver(false);
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center p-6 min-h-screen bg-gradient-to-r from-blue-500 to-blue-900">
        <h1 className="text-white text-4xl">Jeu de la Fourchette</h1>
        <div className="mt-4">
          <input
            type="number"
            value={enteredNumber}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="p-2 rounded-md bg-white border-solid border mr-2"
            placeholder="Entrez un nombre"
          />
          <button
            onClick={handleGuess}
            className="m-5 p-2 rounded-md text-white bg-purple-600"
          >
            Deviner
          </button>
        </div>
        <h2 className="mt-10 text-white">{message}</h2>
        {gameOver && (
          <button
            onClick={handleReset}
            className="mt-4 p-2 rounded-md text-white bg-orange-600"
          >
            Rejouer
          </button>
        )}
      </div>
    </div>
  );
}
