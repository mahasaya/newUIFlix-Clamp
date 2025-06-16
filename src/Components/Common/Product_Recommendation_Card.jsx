import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FlixParamsModal from './flixParamsModal';
const Product_Recommendation_Card = ({SliderData,width,height}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleClose = ()=>{
    setIsOpen(false)
  }

  const handleModalSubmit = (formData) => {
    const params = new URLSearchParams({
      distId: formData?.distributorID,
      iso: formData?.language,
      live:formData?.live
    });
    
    if (formData?.mpn) params.set('mpn', formData?.mpn);
    if (formData?.ean) params.set('ean', formData?.ean);
    navigate(`?${params.toString()}`,{replace:true});
  };
  return (
    <div 
        onClick={() => setIsOpen(true)} 
        className=' flex flex-col justify-between gap-2 min-h-[392px] h-[372px] w-[200px] rounded-[10px] border border-[#cdd8df] p-[24px_8px_16px] relative bg-white'
    >
        <div className=''>
            <img src={`/${SliderData?.img}`}/>
        </div>
        
        <span className='px-1'>
            {SliderData?.name}
        </span>

        <div className='flex gap-3 items-end flex-wrap justify-between px-2'>
            <span className='text-[20px] leading-[24px] font-medium text-[#213038]'>
                {SliderData?.price}
            </span>
            {SliderData?.save &&
                <span className='text-[14px] leading-[24px] font-medium text-[#e5006d]'>Save {SliderData?.save}</span>
            }
            
        </div>
        {isOpen && (
            <FlixParamsModal 
            isOpen={isOpen}
            onClose={handleClose}
            onSubmit={handleModalSubmit}
            productName={SliderData?.label || ''}
            />
        )}
    </div>
  )
}

export default Product_Recommendation_Card