import React, { useState } from 'react';
import SearchBar from '../Core/NavBar/SearchBar';
import FlixLogo from '../../assets/FlixLogo';
import { IoPersonSharp } from "react-icons/io5";
import { BsFillBasketFill, BsList } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { bannerNav } from "../../assets/dummyData"
import IconText from '../Core/NavBar/IconText';
import { highlightBarData } from '../../assets/dummyData';
import useChangeURL from '../Hooks/useChangeURL';

const NavBar = () => {
    const navigate = useNavigate();
    const indexes = useChangeURL();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleClick = (url) => {
        navigate(url);
        setMobileMenuOpen(false);
    };

    return (
        <>
            <div className='flex bg-[#2d2d2d] flex-col'>
                {/* Top Bar - Mobile Friendly */}
                <div className='flex flex-col gap-5 md:flex-row md:gap-0 w-full py-2.5 justify-between border-b-[oklch(0.446_0.03_256.802)] border items-center px-4 sm:px-5'>
                    <div className='flex items-center justify-between w-full md:w-auto flex-1/8'>
                        <FlixLogo clickFunc={() => handleClick("/")} />
                        
                        {/* Mobile Menu Button */}
                        <button 
                            className='md:hidden text-white text-2xl'
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <BsList />
                        </button>
                    </div>
                    
                    <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} flex-1/2 justify-between md:flex flex-col md:flex-row w-full md:w-auto items-center gap-6`}>
                        <SearchBar mobileOpen={mobileMenuOpen} />
                        <div className='flex gap-8 py-3 md:py-0'>
                            <IoPersonSharp 
                                onClick={() => handleClick("profile")} 
                                className="text-white text-xl cursor-pointer"
                            />
                            <BsFillBasketFill 
                                onClick={() => handleClick("cart")} 
                                className="text-white text-xl cursor-pointer"
                            />
                        </div>
                    </div>
                </div>

                {/* Desktop Banner Navigation */}
                <div className='hidden md:flex w-full py-4 items-center px-5'>
                    <div className='lg:w-[70%] w-full mx-auto flex flex-row gap-4 md:gap-0 justify-between items-center'>
                        {bannerNav.map((data, index) => (
                            <span 
                                key={index} 
                                onClick={() => handleClick(`/${data.split(" ").join("-")}`)}  
                                className='uppercase text-white font-[700] text-sm lg:text-base cursor-pointer hover:opacity-75 transition-opacity'
                            >
                                {data}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className='md:hidden bg-[#2d2d2d] w-full py-3 px-5'>
                    <div className='flex flex-col gap-4'>
                        {bannerNav.map((data, index) => (
                            <span 
                                key={index} 
                                onClick={() => handleClick(`/${data.split(" ").join("-")}`)}  
                                className='uppercase text-white font-[700] text-sm cursor-pointer py-1 border-b border-gray-600'
                            >
                                {data}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Highlight Bar */}
            <div className='py-3 flex flex-col justify-center items-center w-full bg-[#f3f4f6]'>
                <div className='flex justify-start flex-wrap sm:justify-center gap-4 md:gap-8 px-2'>
                    {highlightBarData.map((data, index) => (
                        <IconText 
                            key={index} 
                            Icon={data.Icon} 
                            textCap={data.textPrim} 
                            textSmall={data.textSecondary}
                            mobile={true}
                        />
                    ))}
                </div>
            </div>

            {/* Breadcrumb */}
            <div className='w-full bg-[#f3f4f6] border-t border-b border-[oklch(0.45_0.03_256.8_/_0.24)] py-2 flex items-center justify-start px-4 md:px-10 lg:px-20'>
                <span className='text-xs font-medium'>{`Home ${indexes}`}</span>
            </div>
        </>
    )
}

export default NavBar;