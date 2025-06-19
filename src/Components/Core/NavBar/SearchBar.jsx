import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
const SearchBar = () => {
    const [searchInput , setSearchInput] = useState("")
    if(searchInput?.length){
        console.log(searchInput)
    }
    
    return (
        <div className='min-w-[300px] flex justify-between w-[100%] sm:w-[40%] bg-[#41E886] items-center gap-5 rounded-3xl px-3'>
            <input 
                onChange={(e)=>setSearchInput(e.target.value)} 
                className='max-w-[350px] bg-[#41E886] px-2 rounded-3xl text-[black] placeholder-black w-[70%] py-2 appearance-none border-none focus:outline-none' 
                type="text" 
                placeholder="Search for the product" 
            />
            <CiSearch color='black' size={24} style={{ strokeWidth:0.5}} />
        </div>
    )
}

export default SearchBar