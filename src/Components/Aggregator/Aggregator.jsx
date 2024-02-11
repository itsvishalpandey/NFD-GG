import React from "react";
import AggSmall from "./AggSmall";
import AggLargeLeft from "./AggLargeLeft";
import AggLargeRight from "./AggLargeRight";
import AggSectionTwo from "./AggSectionTwo";

function Aggregator() {
  return (
    <>
      <section
        id="aggregator-section"
        className="w-full px-6 md:px-32 lg:px-16 bg-no-repeat bg-cover bg-center text-white aggregatorBackground"
      >
        <div
          className="flex flex-col items-center justify-center pt-28 pb-10 gap-20 lg:flex-row lg:gap-0
        "
        >
          <AggLargeLeft />
          <AggSmall />
          <AggLargeRight />
        </div>
        <div className="flex flex-col gap-14 items-center justify-center py-28">
          <AggSectionTwo />
        </div>
      </section>
    </>
  );
}

export default Aggregator;
