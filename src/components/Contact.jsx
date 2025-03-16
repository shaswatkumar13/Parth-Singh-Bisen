import React from "react";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="contact" />
  </div>
);

const Contact = () => {
  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents default form submission

    const formData = new FormData(event.target);
    formData.append("access_key", "74136384-973c-4482-baae-b67f2ca994c5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        alert("Thank you for reaching out! I’ll get back to you soon.");
        event.target.reset(); // Reset form after successful submission
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-blue-950 py-24 text-yellow-200 sm:overflow-hidden transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-105">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox clipClass="contact-clip-path-1" src="/contact-1.webp" />
          <ImageClipBox
            clipClass="contact-clip-path-1 lg:translate-y-40 translate-y-60"
            src="/contact-2.webp"
          />
        </div>
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox src="/swordman.webp" clipClass="md:scale-125" />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="font-bold text-[12px] uppercase">Join Us Here</p>
          <p className="special-font mt-12 w-full font-bold text-5xl leading-[0.9] md:text-[6rem]">
            Let us build the new era of animation together
          </p>
          <div className="max-w-md w-full mx-auto p-6 bg-yellow-600 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
            {/* Form with corrected onSubmit handler */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-semibold mb-2"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 text-white transition-all duration-300 ease-in-out"
                  required
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-semibold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 text-white transition-all duration-300 ease-in-out"
                  required
                  type="email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-semibold mb-2"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  placeholder="Details of your work.."
                  className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 text-white transition-all duration-300 ease-in-out"
                  required
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-semibold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Project description.."
                  className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 text-white transition-all duration-300 ease-in-out"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-500 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-red-600 hover:scale-105 focus:outline-none"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
