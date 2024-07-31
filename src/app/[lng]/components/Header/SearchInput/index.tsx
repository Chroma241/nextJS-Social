import React from 'react';
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
    return (
        <div className='md:flex justify-center items-center bg-gray-200 p-2 rounded-md hidden ' >
            <CiSearch />
            <input type='search' placeholder='Search...' className='bg-gray-200'/>
        </div>
        
    );
}

export default SearchInput;
