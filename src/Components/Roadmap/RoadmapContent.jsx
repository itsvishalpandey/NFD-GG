import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

function RoadmapContent() {
  return (
    <>
      <section className="w-full flex flex-col gap-12">
        <div className="flex flex-col items-center text-center font-medium gap-8 md:gap-12 lg:gap-16">
          <div className="text-4xl md:text-6xl lg:text-8xl">
            NFD - game changing crypto platform
          </div>
          <div className="flex justify-center items-center gap-8">
            <div className="flex items-center gap-2 text-md">
              <div className="roadmapDone"></div>
              <div>Done</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="roadmapInWork"></div>
              <div>In work</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="roadmapUpcoming"></div>
              <div>Upcoming</div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-[1px] bg-[var(--gray-color)] relative top-2 max-lg:hidden"></div>
        <Swiper
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 25,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full"
        >
          <SwiperSlide>
            <div className="h-full flex flex-col items-start gap-4 p-6 text-sm font-medium text-white rounded-lg roadmap__EachCard lg:bg-none lg:py-0">
              <div className="w-4 h-4 bg-[var(--purple-color)] blur-sm relative rounded-full max-lg:hidden"></div>
              <div className="text pb-4 border-b text-xl">Stage 1</div>
              <div className="flex items-center gap-2">
                <div className="roadmapDone"></div>
                <div>Development</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="roadmapDone"></div>
                <div>Activities and Aggregator</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="roadmapDone"></div>
                <div>Alpha Test</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="roadmapDone"></div>
                <div>Alpha search tool</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="roadmapInWork"></div>
                <div>Beta test</div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-full flex flex-col items-start gap-4 p-6 text-sm font-medium text-white rounded-lg roadmap__EachCard lg:bg-none lg:py-0">
              <div className="w-4 h-4 bg-white  blur-sm relative rounded-full max-lg:hidden"></div>
              <div className="text pb-4 border-b text-xl">Stage 2</div>
              <div className="flex items-center gap-2">
                <div className="roadmapInWork"></div>
                <div>ROI scanner</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="roadmapInWork"></div>
                <div>Aggregator “Summary”</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="roadmapInWork"></div>
                <div>Twitter Scanner tool</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="roadmapUpcoming"></div>
                <div>Whale's analysis</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="roadmapInWork"></div>
                <div>Blocks in Aggregator</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full flex flex-col items-start gap-4 p-6 text-sm font-medium text-white rounded-lg roadmap__EachCard lg:bg-none lg:py-0">
              <div className="w-4 h-4 bg-white  blur-sm relative rounded-full max-lg:hidden"></div>
              <div className="text pb-4 border-b text-xl">Stage 3</div>
              <div className="flex items-center gap-2">
                <div className="roadmapInWork"></div>
                <div>New sections in “Activities”</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="roadmapUpcoming"></div>
                <div>Launching NFD DAO</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="roadmapUpcoming"></div>
                <div>Expanding the calendar</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="roadmapUpcoming"></div>
                <div>Token vesting tool</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="roadmapUpcoming"></div>
                <div>NFD labs incubator</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full flex flex-col items-start gap-4 p-6 text-sm font-medium text-white rounded-lg roadmap__EachCard lg:bg-none lg:py-0">
              <div className="w-4 h-4 bg-white  blur-sm relative rounded-full max-lg:hidden"></div>
              <div className="text pb-4 border-b text-xl">Stage 4</div>
              <div className="flex items-center gap-2">
                <div className="roadmapUpcoming"></div>
                <div>Crypto arbitrage scanner</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="roadmapUpcoming"></div>
                <div>Alpha search AI developing based on data collected</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="roadmapUpcoming"></div>
                <div>Adding any services based on NFD DAO votes</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full flex flex-col items-start gap-4 p-6 text-sm font-medium text-white rounded-lg roadmap__EachCard lg:bg-none lg:py-0">
              <div className="w-4 h-4 bg-white  blur-sm relative rounded-full max-lg:hidden"></div>
              <div className="text pb-4 border-b text-xl">Stage 5</div>
              <div className="flex items-center gap-2">
                <div className="roadmapUpcoming"></div>
                <div>
                  The launch of Project “X” by NFD labs, which will change the
                  culture of crypto investment
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default RoadmapContent;
