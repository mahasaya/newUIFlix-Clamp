import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
const SearchBar = () => {
    const [searchInput , setSearchInput] = useState("")
    console.log(searchInput)
    return (
        <div className='min-w-[400px] flex justify-between w-[100%] sm:w-[40%] bg-white items-center gap-5 rounded-2xl px-3'>
            <input 
                onChange={(e)=>setSearchInput(e.target.value)} 
                className='max-w-[350px] w-[70%] py-1 appearance-none border-none focus:outline-none' 
                type="text" 
                placeholder="Search for the product" 
            />
            <CiSearch />
        </div>
    )
}

export default SearchBar