import { ArrowDropDown } from "@material-ui/icons";
import React from "react";
import "./navbar.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const name = useSelector((state) => state.user.userInfo.name);
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <span className="logo">Sadeq App</span>
          <NavLink to="/">update</NavLink>
          &nbsp;
          <NavLink to="/country">country</NavLink>
          &nbsp;
          <NavLink to="/random">Random</NavLink>
          {/* <Link className="navbarLink" to="/">
            update
          </Link>
          <Link className="navbarLink" to="/country">
            country
          </Link> */}
        </div>
        <div className="navbarCenter">
          <div className="search">
            <input
              type="text"
              placeholder="search for something..."
              className="searchInput"
            />
          </div>
        </div>
        <div className="navbarRight">
          <img
            className="avatar"
            src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <span className="navbarName">{name}</span>
          <ArrowDropDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
