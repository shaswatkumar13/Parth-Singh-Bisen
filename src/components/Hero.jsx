import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button"; // Ensure the correct path

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showHoverVideo, setShowHoverVideo] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  const videoRef = useRef(null);
  const nextVideoRef = useRef(null);
  const totalVideos = 4;

  // Function to get video path
  const getVideoSrc = (index) => `/videos/hero-${index}.mp4`;

  // Handle Video Click - Expand Fullscreen
  const handleVideoClick = () => {
    setIsVideoPlaying(true);
    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
    setHasClicked(true);
  };

  // Close Fullscreen Video
  const closeVideo = () => {
    setIsVideoPlaying(false);
  };

  // Reload video when index changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [currentIndex]);

  // Mouse Move Handler for Small Video Fade
  const handleMouseMove = (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const distance = Math.sqrt(
      Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
    );

    // Show hover video if mouse is within 150px range of the center
    setShowHoverVideo(distance < 150);
  };

  // GSAP Animation when Video Clicked
  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });

        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => {
            if (nextVideoRef.current) nextVideoRef.current.play();
          },
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex, hasClicked], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
    });
  });

  // Open Resume Function
  const openResume = () => {
    window.open("/resume.pdf", "_blank"); // Open in new tab
  };

  return (
    <div
      className="relative h-screen w-screen flex items-center justify-center bg-black"
      onMouseMove={handleMouseMove}
    >
      {/* Main Background Video */}
      <video
        id="current-video"
        src={getVideoSrc(currentIndex)}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      />

      {/* Small Hover Video */}
      <video
        src={getVideoSrc((currentIndex % totalVideos) + 1)}
        autoPlay
        loop
        muted
        playsInline
        className={`absolute w-[300px] h-[300px] rounded-lg transition-opacity duration-500 ${
          showHoverVideo ? "opacity-100" : "opacity-0"
        }`}
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        onClick={handleVideoClick}
      />

      {/* Fullscreen Video */}
      {isVideoPlaying && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/90 z-50"
          onClick={closeVideo}
        >
          <video
            ref={videoRef}
            src={getVideoSrc(currentIndex)}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Next Video for GSAP Animation */}
      <video
        id="next-video"
        ref={nextVideoRef}
        src={getVideoSrc((currentIndex % totalVideos) + 1)}
        className="absolute w-full h-full object-cover hidden"
      />

      {/* Large Heading & Subtitle */}
      <div className="absolute top-10 left-10 w-1/2 text-white z-50">
        <h1 className="special-font text-8xl uppercase font-bold text-blue-200">
          redefi<b>n</b>e
        </h1>
        <p className="mt-4 text-lg font-robert-regular text-blue-100">
          Myself Parth Singh Bisen <br /> I am a 3D Animation and VFX artist
        </p>
        <Button
          id="resume-button"
          title="Check Here"
          leftIcon={<TiLocationArrow />}
          containerClass="bg-blue-200 flex-center gap-1 mt-4"
          onClick={openResume}
        />
      </div>

      {/* Large "GAMING" Text at Bottom Right */}
      <h1 className="special-font text-8xl hero-heading uppercase font-bold absolute bottom-10 right-10 text-white">
        G<b>RA</b>PHICS
      </h1>
    </div>
  );
};

export default Hero;
