
import React, { use } from "react";
import { FaFlag, FaUserCircle, FaDollarSign } from "react-icons/fa";

const AvailablePlayers = ({ playerPromise }) => {
  const playerData = use(playerPromise);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {playerData.map((p) => (
        <div
          key={p.player_name}
          className="card bg-base-100 shadow-md transition-transform hover:scale-[1.02]"
        >
          <figure className="h-56 overflow-hidden">
            <img
              src={p.player_image}
              alt={p.player_name}
              className="object-cover w-full h-full"
            />
          </figure>

          <div className="card-body space-y-3">
            <h2 className="card-title text-lg font-semibold flex items-center gap-2">
              <FaUserCircle className="text-blue-500" />
              {p.player_name}
            </h2>

            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 text-sm">
                <FaFlag className="text-green-600" />
                {p.player_country}
              </p>
              <span className="px-3 py-1 rounded-full bg-amber-100 text-black text-xs font-medium">
                {p.playing_role}
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-1">
                Rating: {p.rating}
              </h3>

              <div className="flex justify-between text-sm">
                <span className="font-medium">Batting:</span>
                <span>{p.bating_style}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-medium">Bowling:</span>
                <span>{p.bowling_style}</span>
              </div>
            </div>

            <div className="card-actions justify-between items-center pt-2">
              <p className="flex items-center gap-1 font-semibold text-black dark:text-white">
                <FaDollarSign className="text-green-500" />
                {p.price}
              </p>
              <button className="btn btn-primary btn-sm">Choose Player</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;