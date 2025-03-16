import React, { useState, useEffect } from "react";
import TiltCard from "./TiltCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [hovered, setHovered] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  const aboutText = `I'm a tech-savvy creative with a passion for VFX, animation, and video editing, bringing stories to life through Blender and CapCut. 
  As a Computer Science Engineer, I merge technical expertise with artistic vision, specializing in Python, Java, and frontend development with HTML, CSS, and JavaScript. 
  Beyond the digital canvas, I'm deeply engaged in community-driven initiatives, striving to inspire and create a positive impact. 
  With a keen eye for design and innovation, I'm always ready to collaborate and bring ideas to reality. Let's create something extraordinary together!`;

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  // Typewriter effect logic
  useEffect(() => {
    if (hovered) {
      setDisplayedText(""); // Reset text on hover
      let i = 0;
      const speed = 20; // Adjust speed (lower = faster)
      const interval = setInterval(() => {
        if (i < aboutText.length) {
          setDisplayedText((prev) => prev + aboutText.charAt(i)); // Append one character at a time
          i++;
        } else {
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }
  }, [hovered]);

  // Scroll to Contact section smoothly
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="text-sm uppercase md:text-[30px]">About the Artist</h2>

        <div className="mt-5 text-center text-2xl uppercase leading-[1] md:text-[4rem] lg:text-[5rem] px-4">
          Creating breathtaking visuals, cinematic effects, and immersive experiences.
        </div>

        {/* Profile Image */}
        <div className="h-screen w-screen flex justify-center items-center" id="profile">
          <div
            className="mask-clip-path relative w-[300px] md:w-[500px] lg:w-[600px] h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden rounded-lg shadow-lg group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Image */}
            <img
              src="/about.jpg"
              alt="About the Artist"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                hovered ? "blur-md brightness-50" : "blur-0"
              }`}
            />

            {/* Hover Text (Typewriter Effect) */}
            {hovered && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center px-6 text-center text-white text-sm md:text-lg lg:text-xl font-semibold leading-[1.5] bg-black/70 rounded-lg p-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="whitespace-pre-line border-r-2 border-white overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: aboutText.length * (20 / 1000), ease: "easeInOut" }}
                >
                  {displayedText}
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Contact Button */}
        <div className="mt-5">
          <button
            className="inline-flex h-10 md:h-12 px-4 md:px-6 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-sm md:text-base font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-pointer"
            onClick={handleScrollToContact} // Call function on click
          >
            Contact Me
          </button>
        </div>

        {/* Subtext */}
        <div className="about-subtext mt-4">
          <p>Bringing 3D & VFX to Life with Blender</p>
        </div>
      </div>

      {/* Tilt Card Section */}
      <div className="flex justify-center mt-10">
        <TiltCard />
      </div>
    </div>
  );
};

export default About;
