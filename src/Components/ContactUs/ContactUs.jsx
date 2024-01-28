import React from "react";
import ContactUsContent from "./ContactUsContent";

function ContactUs() {
  return (
    <>
      <div className="w-full px-6 md:px-32 lg:px-16 bg-[var(--purple-color)] bg-[url(src/assets/seventh_block_right_blur.webp)] bg-no-repeat bg-center bg-cover text-white">
        <div className="flex items-center justify-center py-28">
          <ContactUsContent />
        </div>
      </div>
    </>
  );
}

export default ContactUs;
