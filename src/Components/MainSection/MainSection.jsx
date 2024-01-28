import React from "react";
import MainSectionSmallScreen from "./MainSectionSmallScreen";
import MainSectionLargeScreen from "./MainSectionLargeScreen";

function MainSection() {
  return (
    <>
      <section className="w-full py-28 px-6 md:px-32 lg:px-16 bg-white">
        <div className="flex flex-col gap-36 max-lg:hidden">
          <MainSectionLargeScreen />
        </div>
        <div className="flex flex-col gap-4 lg:hidden">
          <MainSectionSmallScreen />
        </div>
      </section>
    </>
  );
}

export default MainSection;
