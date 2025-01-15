import React, { useState, useEffect } from "react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MainContent from "@/components/MainContent";
import Appdownload from "@/components/Appdownload";
const ScrollColorChanger: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [, setColorName] = useState("Warm Orange");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Calculate scroll percentage
      const totalScroll = docHeight - windowHeight;
      const scrollPercent = Math.min((scrollPosition / totalScroll) * 100, 100);

      setScrollPercent(scrollPercent);

      // Determine color name based on scroll percentage
      if (scrollPercent < 50) {
        setColorName("Warm Orange");
      } else {
        setColorName("Cool Blue");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      {/* Background */}
      {/* <div
        style={{
          background: `linear-gradient(to left, #25A6E8 ${scrollPercent}%, #FFC26F 0%)`,
          transition: "background 0.2s ease",
        }}
        className="fixed inset-0 w-full h-full z-0"
      ></div> */}
      <div
        style={{
          background: `linear-gradient(30deg, #25A6E8 ${scrollPercent}%, #FFC26F 0%)`,
          transition: "background 0.2s ease",
        }}
        className="fixed inset-0 w-full h-full z-0"
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main className="flex flex-col items-center justify-center min-h-screen space-y-10">
          {/* Conditional Content Rendering */}
          {scrollPercent < 50 ? <MainContent /> : <Appdownload />}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ScrollColorChanger;
