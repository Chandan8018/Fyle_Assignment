import "./App.css";
import React from "react";
import HeroSection from "./components/HeroSection";
import ChooseUs from "./components/ChooseUs";
import OurProject from "./components/OurProject";
import Company from "./components/Company";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <HeroSection />
      <Services />
      <ChooseUs />
      <OurProject />
      <Company />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
