import React from "react";
import { FaHome, FaUserAlt, FaCommentAlt, FaBars } from "react-icons/fa";
import Title from "../assets/Title.svg";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-[#4b3621] to-[#6f4e37] text-yellow-300 overflow-hidden">
      {/* Decorative Border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400" />
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* BRANDING SECTION */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Café Royale
            </h1>
            <p className="mt-2 text-base sm:text-lg md:text-xl italic text-yellow-300">
              Brewing inspiration every day.
            </p>
          </div>
          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              [FaHome, "Home"],
              [FaUserAlt, "About"],
              [FaCommentAlt, "Testimonial"],
              [FaBars, "Menu"],
            ].map(([Icon, label], index) => (
              <a
                key={index}
                className="flex flex-col items-center text-sm sm:text-base md:text-lg text-yellow-300 hover:text-yellow-500 transition-colors duration-300"
                style={{ fontFamily: "'Montserrat',sans-serif" }}
                href={`#${label.toLocaleLowerCase()}`}
              >
                <Icon
                  size={28}
                  className="text-2xl sm:text-3xl md:text-4xl mb-1"
                />
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Decorative Seperator */}
        <div className="my-8 relative border-t border-yellow-400 opacity-50">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-600 h-6 w-6 rounded-full">
            <div className="relative h-full w-full flex items-center justify-center group">
              <a href="#menu">
                <img
                  src={Title}
                  alt="Decorative Icon"
                  className="absolute animate-pulse hover:animate-none transition-all duration-300 z-10 -translate-x-3 -translate-y-4 hover:scale-150 "
                  style={{ width: "30px", height: "30px" }}
                />

                {/* Tooltip */}
                <span className="hidden md:block pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap text-[wheat] text-bold text-md font-bold italic px-2 py-1 rounded opacity-0 md:group-hover:opacity-100 transition duration-300 z-10 bg-clip-text text-transparent">
                  Buy me
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row mb-12">
          <div className="w-full md:max-w-md">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full p-0.5">
              <div className="flex bg-[#6f4e37] rounded-full pl-6 pr-2 py-2 ">
                <input
                  type="email"
                  placeholder="Enter your email for brew-tiful updates"
                  className="w-full px-4 py-2 rounded-full text-white bg-transparent outline-none hover: transition duration-300 onclick:scale-105 focus:scale-105 focus:outline-none placeholder-[wheat] text-sm sm:text-base md:text-sm italic"
                  style={{ fontFamily: "'Montserrat',sans-serif" }}
                />
                <button className="ml-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-dark-coffee px-4 py-2 sm:px-6 font-semibold rounded-full hover:scale-105 hover:opacity-90 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center space-x-2">

            <span className="h-px w-8 bg-yellow-400" />

            <p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Designed By {" "}
              <span className="cursor-pointer hover:text-orange-300 transition-colors">
                Ayush
                <span className="text-sm sm:text-base md:text-lg ml-1 text-yellow-300">
                  ✦ ⋆ 
                </span>
              </span>
            </p>

            <span className="h-px w-8 bg-yellow-400" />

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
