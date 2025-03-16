import React, { useState, useEffect } from "react";
import { FaYoutube } from "react-icons/fa";

const projects = [
  { video: "1.mp4", youtubeLink: "https://www.youtube.com/watch?v=MZERwxhmbwU" },
  { video: "2.mp4", youtubeLink: "https://www.youtube.com/watch?v=PBkUHAxUSyA" },
  { video: "elimination.mp4", youtubeLink: "https://www.youtube.com/watch?v=GluKdEdmJ6k" },
  { video: "mystic.mp4", youtubeLink: "https://www.youtube.com/watch?v=dA89IrrhYO0&t=2s" },
];

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("projects-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2;

      if (isVisible) {
        setVisibleCards((prev) => {
          if (prev.length !== projects.length) {
            return projects.map((_, index) => index);
          }
          return prev;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="projects-section" className="relative w-full h-screen text-center overflow-hidden bg-grid">
      {/* Background Image */}
      <div
        className="absolute w-[min(1400px,90vw)] top-[10%] left-1/2 h-[90%] -translate-x-1/2 bg-no-repeat bg-top bg-cover pointer-events-none"
        style={{ backgroundImage: "url('/bg.png')" }}
      ></div>

      {/* Cards Section */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 flex gap-6 z-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative w-[180px] h-[220px] bg-white shadow-lg border border-gray-400 rounded-lg overflow-hidden transform transition-all duration-700 ${
              visibleCards.includes(index) ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
            }`}
          >
            {/* Video */}
            <div className="relative group w-full h-full">
              <video className="w-full h-full object-cover transition-all duration-300 group-hover:blur-md" autoPlay loop muted>
                <source src={`/videos/${project.video}`} type="video/mp4" />
              </video>

              {/* Hover Overlay for Icons */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* YouTube Icon */}
                <a
                  href={project.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full shadow-md hover:bg-red-500 transition"
                  title="Watch on YouTube"
                >
                  <FaYoutube className="text-red-600 text-2xl" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Title Section */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[min(1400px,100vw)] h-auto pb-24 flex flex-wrap justify-center items-center z-10">
        <h1 className="font-black text-[8em] leading-none text-[#25283B] relative">
          PROJECTS
          <span className="absolute inset-0 text-transparent stroke-2 stroke-[#d2d2d2]">PROJECTS</span>
        </h1>
      </div>

      {/* Model Image */}
      <div
        className="absolute bottom-0 left-0 w-full h-[75vh] bg-no-repeat bg-top z-10"
        style={{
          backgroundImage: "url('/model.png')",
          backgroundSize: "auto 130%",
        }}
      ></div>
    </div>
  );
};

export default Projects;
