import React from "react";
import RoadmapContent from "./RoadmapContent";

function Roadmap() {
  return (
    <>
      <div className="w-full px-6 md:px-32 lg:px-16 roadmapBackground text-white">
        <div className="flex flex-col gap-24 py-28">
          <RoadmapContent />
        </div>
      </div>
    </>
  );
}

export default Roadmap;
