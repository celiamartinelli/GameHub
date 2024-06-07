import React, { useState, useEffect } from "react";
import Header from "../../Header/Header";

export default function Invader() {
  const [gridSize, setGridSize] = useState(8);
  const [pixelSize, setPixelSize] = useState(10); // Ajoutez une valeur par défaut pour pixelSize si nécessaire
  const [currentColor, setCurrentColor] = useState(
    "bg-gray-800 border-gray-900"
  ); // Nouvel état pour la couleur actuelle

  const createGrid = () => {
    let grid = [];
    for (let i = 0; i < gridSize; i++) {
      let row = [];
      for (let j = 0; j < gridSize; j++) {
        row.push(
          <div
            className="w-8 h-8 bg-gray-300 border-2 border-gray-500 cursor-pointer"
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
    event.target.className = "w-8 h-8 cursor-pointer border-2 " + currentColor;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setGridSize(event.target[0].value);
    setPixelSize(event.target[1].value);
  };

  return (
    <div>
      <Header />
      <div className=" bg-blue-800">
        <h1 className="flex justify-center items center p-4 text-white font-bold">
          Invader
        </h1>
        <form
          className="h-15 flex items-center justify-center pb-4 "
          onSubmit={handleSubmit}
        >
          <input
            type="number"
            placeholder="Taille de la grille"
            className="p-4 border-0 text-lg w-24 mr-1"
          />
          <input
            type="number"
            placeholder="Taille des pixels"
            className="p-4 border-0 text-lg w-24"
          />
          <button
            type="submit"
            className="p-4 border-0 text-lg text-white bg-purple-600 "
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
        <div className="flex justify-center items-center w-30 h-20">
          <button
            onClick={() => setCurrentColor("bg-gray-300 border-gray-500")}
            className="w-10 h-10 rounded-full bg-gray-300  border-gray-600 box-border"
          />
          <button
            onClick={() => setCurrentColor("bg-gray-800 border-gray-900")}
            className="w-10 h-10 rounded-full bg-gray-800 border-3 border-black box-border"
          />
          <button
            onClick={() => setCurrentColor("bg-green-500 border-green-700")}
            className="w-10 h-10 rounded-full bg-green-500 border-3 border-green-800 box-border"
          />
          <button
            onClick={() => setCurrentColor("bg-yellow-500 border-yellow-700")}
            className="w-10 h-10 rounded-full bg-yellow-500 border-3 border-yellow-800 box-border"
          />
        </div>
      </div>
    </div>
  );
}
