import React from "react";

const Navbar = ({availBalance}) => {
  return (
    <div className="navbar max-w-[1200px] mx-auto ">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <img alt="Tailwind CSS Navbar component" src="/src/assets/logo.png" />
         
        </div>
        <div className="flex items-center gap-0.5 mr-1.5">
            <span className="mr-1">{availBalance}</span>
            <span className="mr-1">Coin</span>
            <img src="/src/assets/dollar-1.png" alt="coin" className="w-6 h-6 ml-2"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
