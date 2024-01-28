import React from "react";
import { Link } from "react-router-dom";

function AggSmallBottom() {
  return (
    <div className="flex flex-col items-start gap-8 px-6 text-white md:px-20 lg:w-1/2 lg:gap-10 lg:sticky lg:top-28 lg:self-start">
      <h1 className="px-6 py-2 rounded-3xl aggregatorTextColor">
        FIRST WEB3 CRYPTO
      </h1>
      <div className="space-y-2 text-5xl font-medium">
        <h1>Keeping track</h1>
        <h1>of project in</h1>
        <h1 className="bg-gradient-to-r from-purple-400 to-purple-300 text-transparent bg-clip-text">
          one place
        </h1>
      </div>
      <p className="text-[var(--gray-color)] font-medium lg:text-lg">
        The NFD.gg aggregator allows you to create a specific card of any
        project and parse any type of information from Discord, Twitter, Dune
        Analytics, TradingView, Github etc. into your own dashboard. Start
        Creating
      </p>
      <div className="w-full flex flex-col text-center gap-8 text-lg font-mediu md:flex-row">
        <Link className="w-full py-4 rounded-xl clipPath__use bg-[#6c52ee] hover:bg-[#6e5ad6]">
          Start Creating
        </Link>
        <Link className="w-full py-4 style__buttonWhite text-[#6c52ee] rounded-xl">
          View Roadmap
        </Link>
      </div>
    </div>
  );
}

export default AggSmallBottom;
