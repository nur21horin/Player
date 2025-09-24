import React from "react";

const SelectPlayers = ({ information }) => {
  return (
    <div className="max-w-[1200px] flex flex-wrap mx-auto">
      {information.map((player, index) => (
        <div key={index} className="m-4 text-center">
          <h1>Name: {player.player_name}</h1>
          <img
            src={player.player_image}
            alt={player.player_name}
            className="w-32 h-32 object-cover rounded-full"
          />
        </div>
      ))}
    </div>
  );
};

export default SelectPlayers;
