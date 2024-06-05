import { NavLink } from "react-router-dom";
import { FaDice } from "react-icons/fa";
import { BiSolidInvader } from "react-icons/bi";
import { GiCardRandom } from "react-icons/gi";

export default function Header() {
  return (
    <div className="bg-header-background p-5 bg-cover bg-center opacity-75 ">
      <h1 className="flex justify-center pt-6 text-5xl font-bold">
        <NavLink to="/">GameHub</NavLink>
      </h1>
      <ul className="flex justify-center ">
        <li className="p-4">
          <NavLink to="/dice-roller">
            <span className="hidden mobileS:block mobileL:block">
              <FaDice />
            </span>
            <span className="mobileS:hidden mobileL:hidden">Dice Roller</span>
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink to="/invader">
            <span className="hidden mobileS:block mobileL:block">
              <BiSolidInvader />
            </span>
            <span className="mobileS:hidden mobileL:hidden">Invader</span>
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink to="/memory-game">
            <span className="hidden mobileS:block mobileL:block">
              <GiCardRandom />
            </span>
            <span className="mobileS:hidden mobileL:hidden">MemoryGame</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
