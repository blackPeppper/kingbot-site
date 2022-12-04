import React from "react";
import { Button } from "./Button";

export let discordIcon =
  "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg";

export const Hero = () => {
  return (
    <div>
      <div className="flex flex-flow-col items-center justify-center h-screen">
        <h1 className="h2 sm:h1 mt-12 anim-show-up anim-delay-2000ms anim-mode-backwards">
          <span className="text-yellow-400">👑 King bot</span>
        </h1>
        <Button/>
      </div>
    </div>
  );
};
