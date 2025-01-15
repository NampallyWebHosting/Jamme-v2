import React, { useState, useEffect } from 'react';

const ScrollComponent: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);
  const [isSecondPageVisible, setIsSecondPageVisible] = useState<boolean>(false);
  const [isFirstPageContentVisible, setIsFirstPageContentVisible] = useState<boolean>(true);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Calculate scroll percentage
      const scrolled = (scrollPosition / scrollHeight) * 100;
      setScrollPercentage(Math.min(scrolled, 100)); // Limit to 100% scroll

      // Show second page content after 50% scroll
      if (scrolled >= 50) {
        setIsSecondPageVisible(true);
      } else {
        setIsSecondPageVisible(false);
      }

      // Hide first page content after 50% scroll
      if (scrolled >= 50) {
        setIsFirstPageContentVisible(false);
      } else {
        setIsFirstPageContentVisible(true);
      }
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Compute background color based on scroll percentage, starting from bg-orange-400
  const backgroundColor = `rgb(${255 - scrollPercentage * 2}, ${165 - scrollPercentage * 1.5}, 0)`; // Dynamic orange-to-yellow range

  return (
    <div>
      {/* Sticky Header */}
      <header className="sticky top-0 w-full bg-gray-800 text-white p-4 z-10">
        <h1 className="text-3xl font-bold">Sticky Header</h1>
        <p>Scroll down to see the content change</p>
      </header>

      {/* First page */}
      <div
        className="page first-page w-full h-screen p-5 transition-all"
        style={{
          backgroundColor: backgroundColor,
          transition: 'background-color 0.3s ease-in-out',
        }}
      >
        <div className={`content ${!isFirstPageContentVisible ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
          <h1 className="text-3xl font-bold">First Page</h1>
          <p className="mt-4 text-lg">Scroll down to see the second page...</p>
        </div>
      </div>

      {/* Second page */}
      <div
        className={`page second-page w-full h-screen p-5 transition-opacity duration-1000 ${
          isSecondPageVisible ? 'opacity-100' : 'opacity-0'
        } ${isSecondPageVisible ? 'overflow-y-auto' : 'overflow-hidden'}`}
      >
        <div className="content">
          <h1 className="text-3xl font-bold">Second Page</h1>
          <p className="mt-4 text-lg">
            This content becomes visible once 50% of the page is scrolled. Now the content can be scrolled!
          </p>
          {/* Add some content to make scrolling more noticeable */}
          <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        </div>
      </div>
    </div>
  );
};

export default ScrollComponent;
