// Slider_Card.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FlixParamsModal from '../../Common/flixParamsModal';

const Slider_Card = ({ SliderData, width, height }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleClose = ()=>{
    setIsOpen(false)
  }
  const handleModalSubmit = (formData) => {
    const params = new URLSearchParams({
      distId: formData.distributorID,
      iso: formData.language,
      live:formData.live
    });
    
    if (formData.mpn) params.set('mpn', formData.mpn);
    if (formData.ean) params.set('ean', formData.ean);
    
    navigate(`${SliderData?.tag}?${params.toString()}`);
  };

  return (
    <div 
      onClick={() => setIsOpen(true)} 
      className={`flex flex-col items-center justify-center gap-8 ${width} ${height} cursor-pointer`}
    >
      <div className='w-[60%] h-auto'>
        <img 
          className='w-full h-auto' 
          src={SliderData?.img} 
          alt={SliderData?.label} 
        />
      </div>
      
      <span className='text-[16px] font-normal'>
        {SliderData?.label}
      </span>
      
      {isOpen && (
        <FlixParamsModal 
          isOpen={isOpen}
          onClose={handleClose}
          onSubmit={handleModalSubmit}
          productName={SliderData?.label || ''}
        />
      )}
    </div>
  );
};

export default Slider_Card;