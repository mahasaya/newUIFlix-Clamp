import React from 'react'
import SliderContainer from '../Components/Core/Home/SliderContainer'
import { SliderProductData } from '../assets/dummyData'
import Slider_Card from '../Components/Core/Home/Slider_Card'
import ShopByCategory from '../Components/Core/Home/ShopByCategory'
const Home = () => {
  return (
    <div className='min-h-screen py-5 flex flex-col text-2xl w-full justify-center items-center'>
      <span className=' w-full text-[20px] leading-[24px] text-center text-[#213038]'>Shop deals</span>
      <SliderContainer
        SliderData={SliderProductData}
        Card={Slider_Card}
      />
      <ShopByCategory/>
    </div>
  )
}

export default Home