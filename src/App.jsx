import { Suspense } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar";
import SelectPlayers from "./components/SelectPlayers/SelectPlayers";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

export default function App() {
  const playerPromise = fetchPlayers();
  return (
    <div >
      <Navbar />
      <div className="flex mx-auto items-center justify-center">
       <Suspense
        fallback={
          <span className=" loading loading-infinity loading-3xl"></span>
        }
        className="flex mx-auto items-center justify-center"
      >
        <AvailablePlayers playerPromise={playerPromise} />
      </Suspense>
      </div>
     
      <SelectPlayers />
    </div>
  );
}
