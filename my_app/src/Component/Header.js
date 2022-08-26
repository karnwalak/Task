import React from "react";
import img from './logos.png';
const Header = () => {
  return (
    <div id="mainHeaderDiv">
      <div id="logoDiv" style={{backgroundImage: "url(" + img + ")",backgroundSize:"cover"}}></div>
      <div id="menuDiv">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
