import React, { useState } from "react";
import "./Navdes.css";

export default function Navbar() {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="nav">
      <div className="burger-menu" onClick={updateMenu}>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
      </div>

      <div className={menu_class}>
        <ul>
          <li className="menu_items">HOME</li>
          <li className="menu_items">ABOUT</li>
          <li className="menu_items">SERVICES</li>
          <li className="menu_items">CONNECT</li>
        </ul>
      </div>
    </div>
  );
}
