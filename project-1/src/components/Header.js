import React from "react";

const Header = ({ score }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-4 p-4">
      <div className="text-white d-flex gap-2 ">
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </div>
      <div className=" text-white text-center">
        <h2>Your Score is</h2>
        <h2 className="text-warning">{score}</h2>
      </div>
    </div>
  );
};

export default Header;
