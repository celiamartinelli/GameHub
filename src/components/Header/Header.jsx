import { NavLink } from "react-router-dom";
import { FaDice } from "react-icons/fa";
import { BiSolidInvader } from "react-icons/bi";
import { GiCardRandom } from "react-icons/gi";
import { TbGrillFork } from "react-icons/tb";

export default function Header() {
  return (
    <div
      className="flex flex-col justify-center items-center shadow-lg"
      style={{
        backgroundImage: "url('../../public/asset/background-2.png')",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-6xl p-7">
        <NavLink to="/">GameHub</NavLink>
      </h1>
      <nav className="mobileS:fixed mobileS:bottom-0 mobileS:left-0 mobileS:right-0 bottom-0 left-0 right-0 bg-white opacity-50 tablet:relative  tablet:bg-transparent ">
        <ul className="flex justify-center items-center text-lg ">
          <li className="p-4 ">
            <NavLink to="/dice-roller">
              <span className="tablet:hidden">
                <FaDice />
              </span>
              <span className=" tablet:block mobileS:hidden mobileL:hidden">
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
