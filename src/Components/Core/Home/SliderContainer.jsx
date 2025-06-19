import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SliderContainer = ({ SliderData, Card }) => {
  const containerRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      calculateScrollAmount();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate scroll amount based on screen size
  const calculateScrollAmount = () => {
    if (!containerRef.current || !containerRef.current.firstChild) return;
    
    const container = containerRef.current;
    const card = container.firstChild;
    const gap = parseFloat(window.getComputedStyle(container).gap);
    const cardWidth = card.offsetWidth;
    
    setScrollAmount(cardWidth + gap);
  };

  // Recalculate when window or data changes
  useEffect(() => {
    calculateScrollAmount();
  }, [windowWidth, SliderData]);

  const scroll = (direction) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (!SliderData?.length) {
    return <div className="text-xl">No data available</div>;
  }

  // Determine card width classes based on screen size
  const getCardWidthClass = () => {
    if (windowWidth < 640) return 'w-[90vw]';     // Mobile: 1 card
    if (windowWidth < 768) return 'w-[45vw]';     // Small tablet: 2 cards
    if (windowWidth < 1024) return 'w-[30vw]';    // Tablet: 3 cards
    return 'w-[12vw]';                           // Desktop: 4+ cards
  };

  return (
    <div className="flex relative w-full my-15">
      {/* Navigation Buttons */}
      <div className="absolute cursor-pointer flex items-center justify-center w-[30px] z-50 h-[30px] top-[47%] right-5">
        <button
          aria-label="Next Course"
          onClick={() => scroll(1)}
          className="w-full flex justify-center items-center cursor-pointer h-full bg-[#56707a] text-center rounded-full text-[20px] font-light text-white"
        >
          <IoIosArrowForward />
        </button>
      </div>

      <div className="absolute cursor-pointer flex items-center justify-center z-50 w-[30px] h-[30px] top-[47%] left-5">
        <button
          aria-label="Previous Course"
          onClick={() => scroll(-1)}
          className="w-full flex justify-center items-center cursor-pointer h-full bg-[#56707a] rounded-full text-center text-[20px] font-light text-white"
        >
          <IoIosArrowBack />
        </button>
      </div>

      {/* Slider Container */}
      <div
        ref={containerRef}
        style={{ scrollbarWidth: "none" }}
        className="flex overflow-y-hidden py-10 flex-row overflow-x-scroll gap-4 md:gap-6 lg:gap-8 w-[90%] mx-auto snap-x snap-mandatory"
      >
        {SliderData.map((data, index) => (
          <div 
            key={index} 
            className={`flex-shrink-0 ${SliderData?.length < 12 && 'min-w-[250px]'} ${getCardWidthClass()} snap-start`}
          >
            <Card
              SliderData={data}
              width="w-full"
              height="h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderContainer;