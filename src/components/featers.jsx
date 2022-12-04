import React from "react";
import { Card } from "./Card";

export const Featers = () => {
  return (
    <>
      <div>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 anim-show-up anim-delay-3000ms anim-mode-backwards">
          <Card title="ticket system 🎟️">
            Bot come with full ticketing system
          </Card>
          <Card title="full system command">
            Every command you need and imagan
          </Card>
          <Card title="slash & prefixs">
            All commands come with support both of slash and prefix commands
          </Card>
          <Card title="24h support">
            Request support with bot support model
          </Card>
          <Card title="24h hosted">
            bot is hosted on server with 24h availability and low ping
          </Card>
          <Card title="and more">
            always under development always updataing and improving it
          </Card>
        </div>
      </div>
    </>
  );
};
