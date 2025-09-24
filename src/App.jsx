import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar";
import SelectPlayers from "./components/SelectPlayers/SelectPlayers";
import { use } from "react";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

export default function App() {
  const [toggle, setToggole] = useState(true);
  const playerPromise = fetchPlayers();
  const [availBalance, setAvailBalance] = useState(600000000);
  const [selectedCount, setSelectedCount] = useState(0);
  const [information, setInformation] = useState([]);

  return (
    <div>
      <Navbar availBalance={availBalance} />
      <div className="border-2 border-red-500 max-w-[1250px] mx-auto  flex justify-between items-center ">
        <h1>Available players</h1>
        <div className="gap-2.3 p-0.5">
          <button
            onClick={() => setToggole(true)}
            className={`p-3 border-[1px] border-gray-400 hover:scale-[1.13] cursor-pointer rounded-lg ${
              toggle === true ? "bg-[#E7FE29] text-amber-900" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggole(false)}
            className={`p-3 border-[1px]  border-gray-400 hover:scale-[1.13] cursor-pointer rounded-lg ${
              toggle === false ? "bg-[#E7FE29] text-amber-900" : ""
            }`}
          >
            Selected <span>{selectedCount}</span>
          </button>
        </div>
      </div>
      {toggle === true ? (
        <div className="flex mx-auto items-center justify-center">
          <Suspense
            fallback={
              <span className=" loading loading-infinity loading-3xl"></span>
            }
            className="flex mx-auto items-center justify-center"
          >
            <AvailablePlayers
              playerPromise={playerPromise}
              setAvailBalance={setAvailBalance}
              selectedCount={selectedCount}
              setSelectedCount={setSelectedCount}
              setInformation={setInformation}
            />
          </Suspense>
        </div>
      ) : (
        <SelectPlayers information={information} />
      )}
    </div>
  );
}
