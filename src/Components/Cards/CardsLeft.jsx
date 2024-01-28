import React from "react";
import { Link } from "react-router-dom";

function CardsLeft() {
  return (
    <>
      <div className="flex flex-col items-start gap-8 pl-4 pr-16 md:pr-48 lg:w-1/2 lg:gap-10 lg:pr-48">
        <h1 className="text-4xl font-medium lg:text-5xl">
          We are delighted to introduce the NFD team members to you
        </h1>
        <p className="text-sm text-[var(--gray-color)] leading-6 lg:text-lg">
          NFD team is always open to new partnerships and new team members, so
          if you have a desire to join and you have a big experience in
          development or crypto - just leave your request in form and we will
          consider it.
        </p>
        <Link className=" style__button text-white px-12 py-4 rounded-lg text-lg font-medium lg:order-2 ">
          Fill out a form
        </Link>
      </div>
    </>
  );
}

export default CardsLeft;
