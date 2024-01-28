import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import MainSection from "../MainSection/MainSection";
import Aggregator from "../Aggregator/Aggregator";
import Features from "../Features/Features";
import ContactUs from "../ContactUs/ContactUs";
import Cards from "../Cards/Cards";
import Roadmap from "../Roadmap/Roadmap";

function Home() {
  return (
    <>
      <HeroSection />
      <MainSection />
      <Aggregator />
      <Features />
      <Roadmap />
      <Cards />
      <ContactUs />
    </>
  );
}

export default Home;
