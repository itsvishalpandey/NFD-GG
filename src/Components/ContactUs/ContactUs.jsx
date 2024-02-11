import React from "react";
import ContactUsContent from "./ContactUsContent";

function ContactUs() {
  return (
    <>
      <section
        id="contact-us-section"
        className="w-full px-6 md:px-32 lg:px-16 bg-[var(--purple-color)] bg-[url(src/assets/seventh_block_right_blur.webp)] bg-no-repeat bg-center bg-cover text-white"
      >
        <div className="flex items-center justify-center py-48">
          <ContactUsContent />
        </div>
      </section>
    </>
  );
}

export default ContactUs;
