import "./App.css";
import React from "react";
import HeroSection from "./components/HeroSection";
import ChooseUs from "./components/ChooseUs";
import OurProject from "./components/OurProject";
import Company from "./components/Company";

function App() {
  return (
    <div>
      <HeroSection />
      <ChooseUs />
      <OurProject />
      <Company />
    </div>
  );
}

export default App;
