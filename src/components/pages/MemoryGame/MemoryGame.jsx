import React, { useState, useEffect } from "react";
import Header from "../../Header/Header";

function MemoryGame() {
  const [emojis, setEmojis] = useState([
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
  ]);
  const [openCards, setOpenCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    setEmojis(emojis.sort(() => (Math.random() > 0.5 ? 1 : -1)));
  }, []);

  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      setTimeout(() => {
        checkForMatch();
      }, 500);
    } else {
      setOpenCards([index]);
    }
  };

  const checkForMatch = () => {
    const card1Index = openCards[0];
    const card2Index = openCards[1];

    if (emojis[card1Index] === emojis[card2Index]) {
      setMatchedCards((prev) => [...prev, card1Index, card2Index]);
    }

    setOpenCards([]);
  };

  return (
    <div>
      <Header />
      <div>
        {" "}
        <h1 className="text-3xl text-white uppercase tracking-wider">
          Memory Game
        </h1>
        <button className="px-5 py-4 text-green-600 bg-white border-none text-lg tracking-wider cursor-pointer font-semibold focus:text-white focus:bg-green-600">
          Reset
        </button>
      </div>
      <div className="flex justify-center items-center min-h-screen bg-green-800">
        <div className="flex justify-center items-center flex-col gap-8 bg-green-600 p-10">
          <div className="w-96 h-96 flex flex-wrap gap-2 transform-style[preserve-3d] perspective[500px]">
            {emojis.map((emoji, index) => (
              <div
                className={`relative w-24 h-24 flex justify-center items-center text-3xl bg-white transition-all duration-200 transform-gpu ${
                  openCards.includes(index) ? "rotate-y-0" : ""
                } ${matchedCards.includes(index) ? "rotate-y-180" : ""}`}
                key={index}
                onClick={() => handleCardClick(index)}
              >
                <div
                  className={`absolute inset-0 bg-green-500 transition-all duration-200 backface-hidden ${
                    openCards.includes(index) || matchedCards.includes(index)
                      ? "rotate-y-180"
                      : ""
                  }`}
                ></div>
                {emoji}
              </div>
            ))}
          </div>
          {matchedCards.length === emojis.length && <div>You Win!</div>}
        </div>
      </div>
    </div>
  );
}

export default MemoryGame;
