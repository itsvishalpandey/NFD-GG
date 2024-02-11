import React from "react";
import HeroSectionLeft from "./HeroSectionLeft";
import HeroSectionRight from "./HeroSectionRight";

function HeroSection() {
  return (
    <>
      <section
        id="hero-section"
        className="w-full px-6 md:px-32 lg:px-16 overflow-hidden"
      >
        <div className="flex flex-col pt-28 pb-10 gap-8 lg:flex lg:flex-row lg:gap-0">
          <HeroSectionLeft />
          <HeroSectionRight />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
