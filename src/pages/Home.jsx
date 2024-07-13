import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import ChooseUs from "../components/ChooseUs";
import OurProject from "../components/OurProject";
import Company from "../components/Company";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";

export default function () {
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
