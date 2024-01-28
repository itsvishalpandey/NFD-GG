import React from "react";
import { Link } from "react-router-dom";

function ContactUsContent() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center gap-12 px-20 md:px-20">
        <div className="text-4xl font-medium lg:text-6xl">
          Join our community
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-8 md:flex-row md:gap-12 text-[var(--purple-color)]">
          <Link className="clipPath__use bg-white flex justify-center items-center text-center gap-3 px-10 py-3 rounded-lg whitespace-nowrap">
            <i
              className="fa-brands fa-discord fa-lg"
              style={{ color: "#6c52ee" }}
            ></i>
            Join Discord
          </Link>
          <Link className="clipPath__use bg-white flex justify-center items-center text-center gap-3 px-10 py-3 rounded-lg whitespace-nowrap">
            <i
              class="fa-brands fa-x-twitter fa-lg"
              style={{ color: "#6c52ee" }}
            ></i>
            Follow Twitter
          </Link>
        </div>
        <div className="text-lg underline">Read Our whitepaper</div>
      </div>
    </>
  );
}

export default ContactUsContent;
