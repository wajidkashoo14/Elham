import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen rounded-xl overflow-hidden bg-transparent">
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          className="w-full h-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 flex items-center justify-center h-full bg-transparent bg-opacity-80">
        <h1 className="text-white text-4xl md:text-6xl font-bold opacity-80">
          Welcome to Our Store
        </h1>
      </div>
    </div>
  );
};

export default Hero;