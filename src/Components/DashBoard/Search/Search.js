import React, { useState } from 'react';
import "./Search.css";
import SearchIcon from '@mui/icons-material/Search';

function Search({search , handleChange}) {
   
  return (
    <div className='search-flex'>
        <SearchIcon sx={{color: "var(--grey)" , fontSize :"1.2rem"}}/>
       <input className='search-input' placeholder='search' value={search} 
       onChange={(e)=>handleChange(e)}/> 
    </div>
  )
}

export default Search