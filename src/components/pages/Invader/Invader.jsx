import React, { useState } from "react";
import Header from "../../Header/Header";

export default function Invader() {
  const [gridSize, setGridSize] = useState(8);
  const [pixelSize, setPixelSize] = useState(10);
  const [currentColor, setCurrentColor] = useState(
    "bg-gray-200 border-gray-900"
  );
  const [selectedButton, setSelectedButton] = useState(
    "bg-gray-200 border-gray-900"
  );

  const createGrid = () => {
    let grid = [];
    for (let i = 0; i < gridSize; i++) {
      let row = [];
      for (let j = 0; j < gridSize; j++) {
        row.push(
          <div
            className={`w-${pixelSize} h-${pixelSize} bg-gray-300 border-2 border-gray-500 cursor-pointer`}
            onClick={clickPixel}
            key={`${i}-${j}`}
          ></div>
        );
      }
      grid.push(
        <div className="flex bg-gray-200" key={i}>
          {row}
        </div>
      );
    }
    return grid;
  };

  const clickPixel = (event) => {
    event.target.className = `w-${pixelSize} h-${pixelSize} cursor-pointer border-2 ${currentColor}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setGridSize(event.target[0].value);
    setPixelSize(event.target[1].value);
  };

  const colorButtons = [
    { color: "bg-gray-800 border-gray-900", darkerBorder: "border-black" },
    { color: "bg-gray-300 ", darkerBorder: "border-gray-600" },
    {
      color: "bg-green-500 border-green-700",
      darkerBorder: "border-green-800",
    },
    {
      color: "bg-yellow-500 border-yellow-700",
      darkerBorder: "border-yellow-800",
    },
  ];

  return (
    <div>
      <Header />
      <div className="bg-blue-800">
        <h1 className="flex justify-center items center p-4 text-white font-bold">
          Invader
        </h1>
        <form
          className="h-15 flex items-center justify-center pb-4"
          onSubmit={handleSubmit}
        >
          <input
            type="number"
            placeholder="Taille de la grille"
            className="p-2 rounded-l-md w-24 bg-white border-solid border"
          />
          <input
            type="number"
            placeholder="Taille des pixels"
            className="p-2 w-24 bg-white"
          />
          <button
            type="submit"
            className="p-2 rounded-r-md text-white bg-purple-600"
          >
            Valider
          </button>
        </form>
      </div>

      <div
        id="invader"
        className="flex flex-col items-center p-6 min-h-screen bg-gradient-to-r from-blue-900 to-purple-800"
      >
        {createGrid()}
        <div className="flex justify-center items-center w-30 h-20 mt-4">
          {colorButtons.map((button) => (
            <button
              key={button.color}
              onClick={() => {
                setCurrentColor(button.color);
                console.log(button.color);
                setSelectedButton(button.darkerBorder);
                console.log(button.darkerBorder);
              }}
              className={`w-10 h-10 rounded-full ${button.color} ${
                selectedButton === button.color ? button.darkerBorder : ""
              } border-solid-3 box-border mx-2`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
