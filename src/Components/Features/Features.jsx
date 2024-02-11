import React from "react";
import FeaturesSmallScreen from "./FeaturesSmallScreen";
import FeaturesLargeScreen from "./FeaturesLargeScreen";

function Features() {
  return (
    <>
      <section
        id="features-section"
        className="w-full px-6 md:px-32 lg:px-16 bg-white"
      >
        <div className="flex flex-col items-center py-28">
          <FeaturesLargeScreen />
          <FeaturesSmallScreen />
        </div>
      </section>
    </>
  );
}

export default Features;
