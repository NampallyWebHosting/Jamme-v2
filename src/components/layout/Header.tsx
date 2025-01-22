import React, { useState, useRef } from "react";
import logo from "@/assets/Logo.png";
import dash from "@/assets/Dash.png";
import beats from "@/assets/Beats.gif";
import bgMusicSrc from "@/assets/music.mp3"; // Importing the audio file
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [musicMode, setMusicMode] = useState<"play" | "pause">("play");
  const bgMusicRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    const bgMusic = bgMusicRef.current;

    if (!bgMusic) return; // Guard for null ref

    if (musicMode === "play") {
      bgMusic.play();
      bgMusic.volume = 0.8;
      setMusicMode("pause");
    } else {
      bgMusic.pause();
      bgMusic.currentTime = 0;
      setMusicMode("play");
    }
  };

  return (
    <header
      className="w-full h-24 sm:h-20 lg:h-24 sticky top-0 z-20"
    >
      <nav className="flex flex-wrap justify-between items-center w-full h-full px-4 lg:px-8 font-Chillax">
        {/* Logo Section */}
        <div className=" hidden  sm:flex items-center gap-2 w-full sm:w-auto justify-between">
          <Link
            to="/"
            className="group flex justify-center items-center gap-0 cursor-pointer animate-pulse"
          >
            <img
              id="logo"
              src={logo}
              alt="Jamme"
              loading="lazy"
              className="w-12 sm:w-14 lg:w-16 aspect-square object-cover animate-scaleLogo pointer-events-none"
            />
            <p
              id="logo__text"
              className="text-xl font-bold text-gray-800 select-none opacity-0 transition-all ease-in-out duration-500 invisible group-hover:opacity-100 group-hover:visible"
            >
              JAMME
            </p>
          </Link>
        </div>

        {/* Menu Section */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
          <Link
            to="/"
            className=" flex sm:hidden justify-center items-center gap-0 cursor-pointer animate-pulse"
          >
            <img
              id="logo"
              src={logo}
              alt="Jamme"
              loading="lazy"
              className="w-12 sm:w-14 lg:w-16 aspect-square object-cover animate-scaleLogo pointer-events-none"
            />
          </Link>
          <button
            onClick={toggleMusic}
            type="button"
            id="music__btn"
            title="Music"
            aria-label="Music"
            className="px-2 sm:px-3 py-1 text-xs sm:text-sm text-black font-medium border border-black rounded-full transition-all hover:text-white"
          >
            <img
              src={musicMode === "play" ? dash : beats}
              alt="Beats"
              className="w-4 sm:w-8 lg:w-8 aspect-square"
            />
          </button>

          <a
            href="https://ads.jamme.app"
            target="_blank"
            rel="noopener noreferrer"
            title="J Ads"
            className="text-xs sm:text-sm lg:text-lg font-medium text-black transition-colors hover:text-orange-500"
          >
            J Ads
          </a>

          <Link
            to="/contact-us"
            type="button"
            className="text-xs sm:text-sm lg:text-lg font-medium text-black transition-colors hover:text-orange-500"
          >
            J Studio
          </Link>

          <Link
            to="/surveyform"
            className="text-xs sm:text-sm lg:text-lg font-medium text-black transition-colors hover:text-orange-500 hidden sm:block"
          >
            J Survey
          </Link>


          <Link
            to="/blogs"
            className="text-xs sm:text-sm lg:text-lg font-medium text-black transition-colors hover:text-orange-500"
          >
            J Blogs
          </Link>
          <Link
            to="/waitlist"
            className="text-xs sm:text-sm lg:text-lg font-medium text-black transition-colors hover:text-orange-500"
          >
            J Queue
          </Link>
        </div>
      </nav>

      {/* Hidden Audio Element */}
      <audio ref={bgMusicRef} id="bg__music" data-mode={musicMode} src={bgMusicSrc} />
    </header>
  );
};

export default Header;
