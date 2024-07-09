import { Link } from "react-router-dom";
import Header from "../../Header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="bg-gray-400 h-screen">
        <h1 className="text-4xl text-white text-center p-5">
          Welcome to GameHub
        </h1>
        <h2 className="text-2xl text-center p-5">Choose a game to play</h2>
        <div>
          <ul
            className="flex flex-wrap justify-center items-center gap-4 p-5
            "
          >
            <li className="flex flex-col justify-center items-center border-2 w-36 h-36 rounded-lg text-white bg-orange-500 shadow-lg transition-transform duration-100 ease-in-out active:scale-95">
              <Link to="/dice-roller">Dice Roller</Link>
            </li>
            <li className="flex flex-col justify-center items-center border-2 w-36 h-36 rounded-lg text-white bg-gradient-to-r from-blue-900 to-purple-800 shadow-lg transition-transform duration-100 ease-in-out active:scale-95">
              <Link to="/invader">Invader</Link>
            </li>
            <li className="flex flex-col justify-center items-center border-2 w-36 h-36 rounded-lg text-white bg-green-800 shadow-lg transition-transform duration-100 ease-in-out active:scale-95">
              <Link to="/memory-game">Memory Game</Link>
            </li>
            <li className="flex flex-col justify-center items-center border-2 w-36 h-36 rounded-lg text-white bg-gradient-to-r from-blue-500 to-blue-900 shadow-lg transition-transform duration-100 ease-in-out active:scale-95">
              <Link to="/fork">La Fourchette</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
