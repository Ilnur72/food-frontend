import React from "react";

const Header = ({setSearchValue}) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-semibold">Jaegar Resto</h2>
        <p className="text-base font-normal text-slate-300">
          {new Date().toDateString()}
        </p>
      </div>
      <div className="w-60 h-12 relative">
        <i className="fa-solid fa-magnifying-glass absolute top-1/2 -translate-y-1/2 left-3"></i>
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for food, coffe, etc..."
          style={{ background: "#2D303E" }}
          className="pl-9 w-full h-full rounded-lg
            border border-zinc-600 focus:border-white outline-none"
          type="text"
        />
      </div>
    </div>
  );
};

export default Header;
