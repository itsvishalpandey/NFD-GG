import React from "react";
import { Link } from "react-router-dom";

function AggSectionTwo() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="text-5xl text-center font-medium lg:text-6xl lg:px-10">
          Find alpha before anyone else with us
        </div>
        <div className="w-full flex flex-col gap-4 lg:flex-row">
          <div className="w-full flex items-center justify-center gap-4 rounded-3xl bg-[#495CEC] py-3 px-6">
            <i class="fa-solid fa-users fa-lg" style={{ color: "white" }}></i>
            <span>Add a list of topTwitter accounts</span>
          </div>
          <div className="w-full flex items-center justify-center gap-4 rounded-3xl bg-[#FF754C] py-3 px-6">
            <i
              class="fa-solid fa-clipboard-list fa-lg"
              style={{ color: "white" }}
            ></i>
            <span>Follow their new subscriptions</span>
          </div>
          <div className="w-full flex items-center justify-center gap-4 rounded-3xl bg-[#495CEC] py-3 px-6">
            <i
              class="fa-solid fa-dharmachakra fa-lg"
              style={{ color: "white" }}
            ></i>
            <span>We'll show you matches on those subscriptions</span>
          </div>
        </div>
        <div className="w-full">
          <img
            className="w-full h-full lg:hidden"
            src="src/assets/AlphaToolMobileOPT.webp"
            alt=""
          />
          <img
            className="w-full h-full max-lg:hidden"
            src="src/assets/1OPT.webp"
            alt=""
          />
        </div>
      </div>
      <div className="w-full bg-[#6c52ee] relative bottom-16 px-6 py-12 lg:rounded-3xl">
        <div className="flex flex-col items-start gap-6 lg:px-6 lg:flex-row lg:items-center">
          <div className="space-y-2 lg:w-2/5">
            <div className="text-[20px] font-medium lg:text-3xl whitespace-nowrap">
              Finding Alpha is easy
            </div>
            <div className="lg:text-md">
              Alpha search tool will let you be one of the first people to find
              the most promising alpha by tracking influencers and the most
              hyped projects.
            </div>
          </div>
          <div className="flex gap-8 text-md font-medium whitespace-nowrap lg:w-3/5 lg:justify-end ">
            <Link className="flex items-center gap-2 px-7 py-4 style__buttonWhite text-[#6c52ee] rounded-lg max-md:hidden">
              Try now For free
            </Link>
            <Link className="flex items-center gap-2 px-7 py-4 style__buttonWhite text-[#6c52ee] rounded-lg">
              <i
                class="fa-brands fa-x-twitter fa-lg"
                style={{ color: "#6c52ee" }}
              ></i>
              Follow Twitter
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AggSectionTwo;
