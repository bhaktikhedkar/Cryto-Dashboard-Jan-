import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import  Button from '@mui/material/Button';
import { IconButton } from '@mui/material';

export default function TemporaryDrawer() {
  const[open,setOpen] = useState(false);
 

  return (
    <div>
         <IconButton onClick={()=>setOpen(true)}><MenuRoundedIcon className="link"/></IconButton> 
          <Drawer
            anchor={"right"}
            open={open}
            onClose={()=>setOpen(false)}
          >
          <div className='drawer-div'>
          <a href='/'>
          <p className='link'>HOME</p>
          </a>
          <a href='/compare'>
          <p className='link'>COMPARE</p>
          </a>
          <a href='/watchlist'>
          <p className='link'>WATCHLIST</p>
          </a>
          <a href='/dashboard'>
          <p className='link'>DASHBOARD</p>
          </a>
          </div>
          </Drawer>
       
    </div>
  );
}
