import React, { useState } from 'react';
import "./Search.css";
import SearchIcon from '@mui/icons-material/Search';
import { Tooltip } from '@mui/material';

function Search({search , handleChange}) {
   
  return (
    <div className='search-flex'>
        <SearchIcon sx={{color: "var(--grey)" , fontSize :"1.2rem"}}/>
        <Tooltip title = "search coin here" placement='top-start'>
       <input className='search-input' placeholder='search' value={search} 
       onChange={(e)=>handleChange(e)}/> 
       </Tooltip >
    </div>
  )
}

export default Search