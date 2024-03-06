import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="main">
        <div className="first">
          <img
            src={logo}
            alt=""
            style={{ width: "90px", marginLeft: "20px" }}
          ></img>
        </div>
        <div className="second">
          <a>Crypto Taxes</a>
          <a>Free Tools</a>
          <a>Resource Center</a>
          <button>Get Started</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
