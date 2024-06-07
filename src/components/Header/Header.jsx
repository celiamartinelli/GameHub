import { NavLink } from "react-router-dom";
import { FaDice } from "react-icons/fa";
import { BiSolidInvader } from "react-icons/bi";
import { GiCardRandom } from "react-icons/gi";
import { TbGrillFork } from "react-icons/tb";

export default function Header() {
  return (
    <div>
      <h1 className="flex justify-center pt-6 text-5xl font-bold bg-header-background p-10 bg-cover bg-center opacity-75 backdrop-blur-lg">
        <NavLink to="/">GameHub</NavLink>
      </h1>
      <nav className="tablet:fixed tablet:top-14 tablet:left-0 tablet:right-0 mobileS:fixed mobileS:bottom-0 mobileS:left-0 mobileS:right-0  mobileS:bg-white opacity-50 mobileM:bg-white  mobileL:bg-white tablet:bg-transparent ">
        <ul className="flex justify-center">
          <li className="p-4">
            <NavLink to="/dice-roller">
              <span className="tablet:hidden">
                <FaDice />
              </span>
              <span className="tablet:block mobileS:hidden mobileL:hidden">
                Dice Roller
              </span>
            </NavLink>
          </li>
          <li className="p-4">
            <NavLink to="/invader">
              <span className="tablet:hidden">
                <BiSolidInvader />
              </span>
              <span className="tablet:block mobileS:hidden mobileL:hidden">
                Invader
              </span>
            </NavLink>
          </li>
          <li className="p-4">
            <NavLink to="/memory-game">
              <span className="tablet:hidden">
                <GiCardRandom />
              </span>
              <span className="tablet:block mobileS:hidden mobileL:hidden">
                MemoryGame
              </span>
            </NavLink>
          </li>
          <li className="p-4">
            <NavLink to="/fork">
              <span className="tablet:hidden">
                <TbGrillFork />
              </span>
              <span className="tablet:block mobileS:hidden mobileL:hidden">
                La fourchette
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
