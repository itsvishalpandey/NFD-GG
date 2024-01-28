import React, { useState } from "react";

function FeaturesLargeScreen() {
  const clickItems = [
    {
      id: 1,
      name: "Activities",
      content: {
        image: "src/assets/activitiesBenefitOPT.webp",
        imgDesc: `Receive already reviewed information about the most captivating events in crypto world. The professional analytics will allow you to easily make money.`,
      },
    },
    {
      id: 2,
      name: "Auto-Update Feed",
      content: {
        image: "src/assets/feedBenefitOPT.webp",
        imgDesc: `All activities will have an “auto update feed”, which will be monitored by the NFD team so that you wont miss important changes or additions to any activity. Stay up to date!`,
      },
    },
    {
      id: 3,
      name: "Calender",
      content: {
        image: "src/assets/calendarBenefitOPT.webp",
        imgDesc: `We have implemented an internal calendar functionality that will synchronize all your “Activities” in NFD, all their deadlines and important events. You can also add your token`,
      },
    },
    {
      id: 4,
      name: "Aggregator",
      content: {
        image: "src/assets/aggregatorBenefitOPT.webp",
        imgDesc: `Create a project card, set up data parsing in just 2 minutes and get only the necessary information concerning any crypto project.`,
      },
    },
    {
      id: 5,
      name: "Alpha Search",
      content: {
        image: "src/assets/alphaSearchBenefitOPT.webp",
        imgDesc: `Make your own list of influencers, funds or degen accounts on Twitter and monitor their new subscriptions and where those subscriptions match each other. Be the first to find an alpha.`,
      },
    },
  ];

  const [clickedItems, setClickedItems] = useState(clickItems[0].id);

  const handleMenuClick = (id) => {
    setClickedItems((prev) => (prev === id ? id : id));
  };
  return (
    <>
      <div className="flex flex-col gap-32 max-lg:hidden">
        <div className="flex flex-col items-center justify-center text-center gap-8">
          <div className="text-6xl font-medium">
            Use all the benefits of NFD
          </div>
          <div className="text-xl text-[var(--gray-color)]">
            Unlock the next level of control with customizable real-time feeds,
            charts, <br /> watchlists, and alerts with NFD.gg
          </div>
        </div>

        <div className="w-full flex gap-12 text-[var(--gray-color)]">
          <div className="w-2/5 flex flex-col gap-3">
            {clickItems.map((item) => (
              <div
                className={`${
                  clickedItems === item.id ? "text-black" : ""
                } flex flex-col gap-2 items-start justify-center border px-8 py-5 rounded-xl`}
                onClick={() => handleMenuClick(item.id)}
                key={item.id}
              >
                <div className="text-xl font-medium ">{item.name}</div>
                {clickedItems === item.id && (
                  <div className="text-lg">{item.content.imgDesc}</div>
                )}
              </div>
            ))}
          </div>
          <div className="w-3/5">
            {clickItems.map((item) => (
              <div key={item.id}>
                {clickedItems === item.id && (
                  <img
                    src={item.content.image}
                    className="w-full h-full object-cover rounded-lg"
                    alt={item.name}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturesLargeScreen;
