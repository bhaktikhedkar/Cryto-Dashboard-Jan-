import React from 'react';
import "./Loader.css";
import { CircularProgress } from '@mui/material';

function Loader() {
  return (
    <div className='loader-background'><CircularProgress /></div>
  )
}

export default Loader