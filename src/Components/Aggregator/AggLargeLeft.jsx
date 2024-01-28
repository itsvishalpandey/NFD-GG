import React from "react";

function AggLargeLeft() {
  return (
    <>
      <div className="h-[1260px] flex flex-col max-lg:hidden">
        <div className="stackedImg_fixedCard sticky top-24">
          <img src="src/assets/AggOverlayOPT.webp" alt="" />
        </div>
        <div className="cards flex flex-col gap-32 z-0">
          <div className="stackedImg_card translate-y-[-100%]">
            <img src="src/assets/AggContentOPT.webp" alt="" />
          </div>

          <div className="mt-6 stackedImg_card translate-y-[-100%]">
            <img src="src/assets/AggContent2OPT.webp" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AggLargeLeft;
