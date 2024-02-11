import React from "react";
import AboutUsSmallScreen from "./AboutUsSmallScreen";
import AboutUsLargeScreen from "./AboutUsLargeScreen";

function AboutUs() {
  return (
    <>
      <section
        id="about-us-section"
        className="w-full py-28 px-6 md:px-32 lg:px-16 bg-white"
      >
        <div className="flex flex-col gap-36 max-lg:hidden">
          <AboutUsLargeScreen />
        </div>
        <div className="flex flex-col gap-4 lg:hidden">
          <AboutUsSmallScreen />
        </div>
      </section>
    </>
  );
}

export default AboutUs;
