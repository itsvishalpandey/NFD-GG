import React from "react";
import CardsLeft from "./CardsLeft";
import CardsRight from "./CardsRight";

function Cards() {
  return (
    <>
      <div className="w-full px-6 md:px-32 lg:px-16 bg-[url(src/assets/sixth_block_two_blur.webp)] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col gap-16 py-28 lg:flex-row lg:gap-0">
          <CardsLeft />
          <CardsRight />
        </div>
      </div>
    </>
  );
}

export default Cards;
