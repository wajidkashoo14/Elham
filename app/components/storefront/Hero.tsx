'use client'
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h1 className="text-white font-bold mb-4 animate-fadeIn">
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-2">
            Timeless Artistry
          </span>
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-amber-200">
            Kashmiri Paper Mache
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mb-8 font-light leading-relaxed">
          Handcrafted treasures from the valley of Kashmir, where tradition meets elegance
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore Collection
          </button>
          <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm border-2 border-white/50 transition-all duration-300">
            Our Story
          </button>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-white/70 text-sm mb-2">Scroll to discover</span>
            <svg 
              className="w-6 h-6 text-white/70" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Hero;
