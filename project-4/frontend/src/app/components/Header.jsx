import React from "react";
import logo from "../../images/logo.png";
const Header = () => {
  return (
    <div className="container d-flex  align-items-center">
      <div className="">
        <img src={logo} alt="logo" width="60" />
      </div>
      <h1 className="mx-2">React Redux</h1>
    </div>
  );
};

export default Header;
