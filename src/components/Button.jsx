import React from "react";
import { discordIcon } from "./Hero";

export function Button() {
  return (
    <div className="btn secondary h4 px-8 py-5 mt-6 anim-fade-in anim-delay-3000ms anim-mode-backwards">
      <a href="https://discord.com/api/oauth2/authorize?client_id=1045698060283559956&permissions=8&scope=bot%20applications.commands">
        add to discrod
        <img width={35} className="ml-5" src={discordIcon} alt="" srcset="" />
      </a>
    </div>
  );
}
