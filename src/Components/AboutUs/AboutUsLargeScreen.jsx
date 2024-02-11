import React from "react";

function AboutUsLargeScreen() {
  return (
    <>
      <div className="flex sticky top-32 gap-12">
        <div className="w-2/5 flex flex-col items-start justify-center gap-6">
          <h2 className="text-6xl font-medium mb-12">
            The first web3 crypto platform
          </h2>
          <h2 className="text-2xl font-medium">Problem</h2>
          <p className="text-lg text-gray-500 text-left">
            Today, even in alpha communities, there's an enormous volume of
            information that members have to wade through for 6-8+ hours a day.
            Cutting through the noise of spam is a real problem even where
            there's something genuinely worth knowing.
          </p>
        </div>

        <div className="w-3/5 bg-[url(src/assets/herosection2.jpg)] bg-center bg-no-repeat">
          <img
            src="src/assets/herosection21.jpg"
            className=" w-[500px] mx-auto object-cover"
            alt=""
          />
        </div>
      </div>

      <div className="flex gap-12">
        <div className="w-2/5 flex flex-col items-start justify-center gap-4 z-10 bg-white">
          <h2 className="text-6xl font-medium mb-10">
            We work to make your life easier
          </h2>
          <h2 className="text-2xl font-medium">Solution</h2>
          <p className="text-lg text-gray-500 text-left">
            NFD.gg heralds a new era in alpha communities, one where they have
            their own platform, which structures and condenses relevant
            information on all these alpha activities, where our team monitors
            any updates on these activities 24/7. No more reading 2000+ discord
            messages a day and tracking twitter day in, day out. Everything you
            ever need to know can be found on NFD.gg.
          </p>

          <div className="h-[1px] w-full bg-gray-300 my-6"></div>

          <div className="flex items-center gap-4 py-1 px-4 shadow shadow-slate-300 rounded-lg">
            <img
              className="h-10 w-14"
              src="src/assets/heroimg.png"
              alt="globalImg"
            />
            <span className="text-lg">
              NFD will save you time and help you earn money in crypto.
            </span>
          </div>
        </div>
        <div className="w-3/5"></div>
      </div>
    </>
  );
}

export default AboutUsLargeScreen;
