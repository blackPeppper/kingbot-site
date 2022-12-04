import React, { useEffect } from "react"; 
import { Navbar } from "spices-fruitui";
import { Button } from "./Button";
import { discordIcon } from "./Hero";

export const Header = () => {
  useEffect(() => {
    Navbar();
  },[])
  return (
    <div>
      <nav className="navbar secondary">
        <div className="brand">
          <p>👑 King bot</p>
        </div>
        <div className="toggle">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="navbar-links">
          <a className="anim-fade-in anim-delay-3000ms anim-mode-backwards" href="https://discord.com/api/oauth2/authorize?client_id=1045698060283559956&permissions=8&scope=bot%20applications.commands"><li className="btn secondary "><img src={discordIcon} alt="" width={30}  height={30}/></li></a>
        </ul>
      </nav>
    </div>
  );
};
