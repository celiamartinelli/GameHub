import { Routes, Route } from "react-router-dom";
import Home from "@/components/pages/Home/Home";
import Invader from "@/components/pages/Invader/Invader";
import MemoryGame from "../pages/MemoryGame/MemoryGame";
import NotFound from "../pages/NotFound/NotFound";
import DiceRoller from "../pages/DiceRoller/DiceRoller";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dice-roller" element={<DiceRoller />} />
      <Route path="/invader" element={<Invader />} />
      <Route path="/memory-game" element={<MemoryGame />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
