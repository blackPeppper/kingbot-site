import { useState } from "react";
import { Commands } from "./components/Commands";
import { Featers } from "./components/featers";
import { Hero } from "./components/Hero";
import { Header } from "./components/Navbar";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <div className="bg-gray-900 anim-slide-top">
        <div className="stage">
          <Hero />
          <Featers />
          <br />
          {/* <Commands/> */}
        </div>
      </div>
    </>
  );
}

export default App;
