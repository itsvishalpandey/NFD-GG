import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

function AggSmall() {
  const AggSmallData = [
    {
      id: 1,
      description:
        "You can see several categories of these events, from retrodrops and early projects to raffles and mint sales.",
      image: "src/assets/HotEventsMobileOPT.webp",
    },
    {
      id: 2,
      description:
        "All of these events have an overview page and a step-by-step guide.",
      image: "src/assets/ShoReviewTopMobileOPT.webp",
    },
    {
      id: 3,
      description:
        "And a major plus is that they all have an “Auto-update feed”, and all updates/changes to these activities are analyzed and researched by our team and published in this feed.",
      image: "src/assets/FeedImageMobileOPT.webp",
    },
  ];

  return (
    <>
      <div className="w-full flex flex-col gap-8 px-6 lg:hidden">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="text-5xl font-medium space-y-2">
            <h1>No spam only</h1>
            <h1 className="text-blue-500">Alpha</h1>
          </div>
          <p className="text-gray-500 text-md">
            We publish on the NFD.gg platform only that activities that have
            been selected and researched by our team.
          </p>
        </div>
        <div className="w-full text-center">
          <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper w-full"
          >
            {AggSmallData.map((data) => (
              <SwiperSlide>
                <div key={data.id} className="flex flex-col gap-8">
                  <span>{data.description}</span>
                  <img
                    className="w-full h-[400px] object-cover rounded-lg md:w-full"
                    src={data.image}
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default AggSmall;
