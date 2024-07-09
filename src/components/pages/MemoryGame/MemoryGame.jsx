import React, { useState, useEffect } from "react";
import "./MemoryGame.scss";
import Header from "../../Header/Header";

function MemoryGame() {
  const initialEmojis = [
    "🥑",
    "🥑",
    "🌻",
    "🌻",
    "🔥",
    "🔥",
    "😍",
    "😍",
    "👽",
    "👽",
    "💩",
    "💩",
    "✌🏻",
    "✌🏻",
    "😎",
    "😎",
  ];

  const [emojis, setEmojis] = useState([]);
  const [openCards, setOpenCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState(
    Array(initialEmojis.length).fill(false)
  );

  useEffect(() => {
    setEmojis([...initialEmojis].sort(() => Math.random() - 0.5));
  }, []);

  const handleCardClick = (index) => {
    if (flippedCards[index] || openCards.length === 2) return;

    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = true;
    setFlippedCards(newFlippedCards);
    setOpenCards((prev) => [...prev, index]);

    if (openCards.length === 1) {
      setTimeout(() => {
        checkForMatch(index);
      }, 500);
    }
  };

  const checkForMatch = (secondIndex) => {
    const firstIndex = openCards[0];
    if (emojis[firstIndex] === emojis[secondIndex]) {
      setMatchedCards((prev) => [...prev, firstIndex, secondIndex]);
    } else {
      const newFlippedCards = [...flippedCards];
      newFlippedCards[firstIndex] = false;
      newFlippedCards[secondIndex] = false;
      setFlippedCards(newFlippedCards);
    }
    setOpenCards([]);
  };

  const resetGame = () => {
    setEmojis([...initialEmojis].sort(() => Math.random() - 0.5));
    setFlippedCards(Array(initialEmojis.length).fill(false));
    setOpenCards([]);
    setMatchedCards([]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col items-center p-6 bg-green-800 ">
        <h1
          className="text-4xl text-white mb-2
"
        >
          Jeu de Mémoire
        </h1>
        <button
          className="px-3 py-2 text-green-600 tracking-wider cursor-pointer font-semibold bg-white rounded focus:outline-none focus:bg-green-600 focus:text-white"
          onClick={resetGame}
        >
          Réinitialiser
        </button>
      </div>
      <div className="flex flex-col items-center bg-green-600 p-7 flex-grow">
        {matchedCards.length === emojis.length && (
          <div className="text-white text-xl">Vous avez gagné!</div>
        )}
        <div className="grid grid-cols-4 grid-rows-4 gap-2 mt-5">
          {emojis.map((emoji, index) => (
            <div
              className={`card w-14 h-14 rounded-lg ${
                flippedCards[index] ? "flipped" : ""
              }`}
              key={index}
              onClick={() => handleCardClick(index)}
            >
              <div className="card-inner">
                <div className="card-front flex justify-center items-center text-3xl bg-white">
                  {emoji}
                </div>
                <div className="card-back bg-green-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MemoryGame;
