import React, { useState } from "react";

function FeaturesSmallScreen() {
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
    setClickedItems((prev) => (prev.id === id ? null : id));
  };
  return (
    <>
      <div className="flex flex-col gap-14 lg:hidden">
        <div className="flex flex-col items-center justify-center text-center gap-8">
          <div className="text-4xl font-medium">
            Use all the benefits of NFD
          </div>
          <div className="text-sm">
            Unlock the next level of control with customizable real-time feeds,
            charts, watchlists, and alerts with NFD.gg
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 px-8 py-4 cursor-pointer">
          {clickItems.map((item) => (
            <div
              key={item.id}
              className="w-full text-[var(--gray-color)] border-t border-gray-500 py-4"
            >
              <div
                onClick={() => handleMenuClick(item.id)}
                className="w-full flex items-center justify-center gap-6 py-4 text-2xl"
              >
                <div>0{item.id}</div>
                <div className="w-full">
                  <h1 className="font-medium text-black">{item.name}</h1>
                  <h1>{item.subName}</h1>
                </div>
                <div>
                  {clickedItems === item.id ? (
                    <i className="fa-solid fa-x fa-lg"></i>
                  ) : (
                    <i className="fa-solid fa-bars fa-lg"></i>
                  )}
                </div>
              </div>
              {clickedItems === item.id && (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 p-8 rounded-lg bg-gray-100"
                >
                  <img
                    className="h-32 w-32 mx-auto object-cover"
                    src={item.content.image}
                    alt={item.content.imgName}
                  />
                  <h2 className="text-2xl font-medium text-black">
                    {item.content.imgName}
                  </h2>
                  <p>{item.content.imgDesc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FeaturesSmallScreen;
