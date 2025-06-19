import React from 'react'
// import { SliderProductData } from '../../../assets/dummyData'
import { useRef , useState, useEffect} from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Slider_Card from './Slider_Card';
const SliderContainer = ({SliderData,Card}) => {
const containerRef = useRef(null);

  const scrollToLastSection = (num) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = 150 + 16; 
      container.scrollBy({ left: num * scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const handleScroll = () => {
        const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth;
      
        if (isAtEnd) {
          const scrollAmount = 150 + 16;
        container.scrollBy({ left:  -(SliderData.length )* scrollAmount, behavior: "smooth" });
       
        }else{
          
        }
      };
  
      container.addEventListener('scroll', handleScroll);
  
    
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, [SliderData]);
  
  if (!SliderData?.length) {
    return <div className="text-xl ">No data available</div>;
  }
  return (
    <div className="flex relative w-full my-15">
      {/* Navigation Buttons */}
      <div className="absolute cursor-pointer flex items-center justify-center w-[30px] z-50 h-[30px] top-[47%] right-5">
        <button
          aria-label="Next Course"
          onClick={() => scrollToLastSection(1)}
          className="w-full flex justify-center items-center cursor-pointer h-full bg-[#56707a] text-center rounded-full text-[20px] font-light text-white"
        >
          <IoIosArrowForward/>
        </button>
      </div>

      <div className="absolute cursor-pointer flex items-center justify-center z-50 w-[30px] h-[30px] top-[47%] left-5">
        <button
          aria-label="Previous Course"
          onClick={() => scrollToLastSection(-1)}
          className="w-full flex justify-center items-center cursor-pointer  h-full bg-[#56707a] rounded-full text-center text-[20px] font-light text-white"
        >
          <IoIosArrowBack/>
        </button>
      </div>

      {/* Slider Container */}
      <div
        ref={containerRef}
        style={{ scrollbarWidth: "none" }}
        className="flex overflow-y-hidden flex-row overflow-scroll gap-4  w-[90%] mx-auto "
      >
        {
          
          SliderData.map((SliderData, index) => (
          <div key={index} className="w-fit h-fit">
            <Card
              SliderData={SliderData}
              width={"w-[150px]"}
              height={"h-[250px]"}
            />
           
          </div>
        ))
       
        }
        <div className="w-[150px] h-[250px] flex justify-center items-center text-richblack-25 flex-shrink-0">additional stuff</div>
      </div>
    </div>
  );
}

export default SliderContainer