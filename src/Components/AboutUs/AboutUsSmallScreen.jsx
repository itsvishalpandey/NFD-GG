import React, { useState } from "react";

function AboutUsSmallScreen() {
  const clickItems = [
    {
      id: 1,
      name: "Problem",
      subName: "Crypto Infonoise",
      content: {
        image: "src/assets/herosection21.jpg",
        imgName: "The first web3 crypto platform",
        imgDesc: `In today's cryptospace there is a big problem of "information noise". Anyone getting into crypto and trying to find worthwhile activities or alpha projects in it encounters a huge amount of information that they have to filter daily.`,
      },
    },
    {
      id: 2,
      name: "Solution",
      subName: "NFD Platform",
      content: {
        image: "src/assets/cubeTogetherOPT.webp",
        imgName: "We work to make your life easier",
        imgDesc: `With NFD you will be able to participate only in the most selected activities, thanks to which you can quickly understand crypto and earn money. Also with the help of our Aggregator you will be able to track all the necessary information on the projects you are interested in in one place.`,
      },
    },
  ];

  const [clickedItem, setClickedItem] = useState(clickItems[0].id);

  const handleMenuClick = (id) => {
    setClickedItem((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col items-center justify-center text-center gap-8">
        <div className="text-4xl font-medium">
          THE FIRST WEB3 CRYPTO PLATFORM
        </div>
        <div className="text-sm">
          In today's cryptospace there is a big problem of "information noise".
          Anyone getting into crypto and trying.
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 px-8 py-4 cursor-pointer">
        {clickItems.map((item) => (
          <div
            key={item.id}
            className="w-full text-gray-600 border-t border-gray-500 py-4"
          >
            <div
              onClick={() => handleMenuClick(item.id)}
              className={`w-full flex items-center justify-center gap-6 py-4 text-2xl`}
            >
              <div>{item.id}</div>
              <div className="w-full">
                <h1 className="font-medium text-black">{item.name}</h1>
                <h1>{item.subName}</h1>
              </div>
              <div>
                {clickedItem === item.id ? (
                  <i className="fa-solid fa-x fa-lg"></i>
                ) : (
                  <i className="fa-solid fa-bars fa-lg"></i>
                )}
              </div>
            </div>
            {clickedItem === item.id && (
              <div className="flex flex-col gap-4 p-8 rounded-lg bg-white">
                <img
                  className="h-48 w-60 mx-auto object-cover"
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
  );
}

export default AboutUsSmallScreen;
