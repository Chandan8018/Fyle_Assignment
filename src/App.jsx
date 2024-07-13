import "./App.css";
import React from "react";
import HeroSection from "./components/HeroSection";
import ChooseUs from "./components/ChooseUs";
import OurProject from "./components/OurProject";
import Company from "./components/Company";
import Feedback from "./components/Feedback";

function App() {
  return (
    <div>
      <HeroSection />
      <ChooseUs />
      <OurProject />
      <Company />
      <Feedback />
    </div>
  );
}

export default App;
