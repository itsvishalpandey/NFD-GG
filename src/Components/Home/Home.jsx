import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import MainSection from "../AboutUs/AboutUs";
import Aggregator from "../Aggregator/Aggregator";
import Features from "../Features/Features";
import ContactUs from "../ContactUs/ContactUs";
import Cards from "../Cards/Cards";
import Roadmap from "../Roadmap/Roadmap";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AboutUs from "../AboutUs/AboutUs";

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <Aggregator />
      <Features />
      <Roadmap />
      <Cards />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Home;
