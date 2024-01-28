import React from "react";
import img1 from "../../assets/camera.jpg";

function CardsRight() {
  const cardDetails = [
    {
      id: 1,
      image: "src/assets/villiam.webp",
      name: "William",
      post: "CTO",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, ullam!",
    },
    {
      id: 2,
      image: "src/assets/leoor.webp",
      name: "Leo",
      post: "CEO",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, ullam!",
    },
    {
      id: 3,
      image: "src/assets/minter.webp",
      name: "Vadim",
      post: "CCO",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, ullam!",
    },
    {
      id: 4,
      image: "src/assets/vitale.webp",
      name: "Vitale",
      post: "Team Lead Fullstack",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, ullam!",
    },
    {
      id: 5,
      image: "src/assets/nik.webp",
      name: "Nikita",
      post: "Frontend Developer",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, ullam!",
    },
    {
      id: 6,
      image: "src/assets/den.webp",
      name: "Den",
      post: "Backend Developer",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, ullam!",
    },
  ];

  return (
    <>
      <section className="flex flex-wrap bg-white lg:w-1/2">
        {cardDetails.map((card) => (
          <div className="each_box text-center" key={card.id}>
            <div className="w-full h-full flex flex-col justify-center items-center gap-5 py-6 px-2 cursor-pointer lg:px-0 box_container">
              <img
                src={card.image}
                className="w-24 h-24 rounded-full object-cover shadow-lg"
                alt=""
              />
              <div className="flex flex-col gap-1 box_content">
                <h2 className="text-black">{card.name}</h2>
                <h5 className="text-[var(--gray-color)]">{card.post}</h5>
              </div>

              <div
                className="w-full h-full absolute top-0 left-0 right-0 p-5 z-10 bg-white
               transition-transform duration-500 delay-700 transform -translate-x-full box_hiddenData"
              >
                <h2>{card.description}</h2>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default CardsRight;
