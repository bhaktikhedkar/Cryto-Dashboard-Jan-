import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import  Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import Switch from "@mui/material/Switch";
import { toast } from "react-toastify";

export default function TemporaryDrawer() {
  const[open,setOpen] = useState(false);
 
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    if (localStorage.getItem("theme") != "dark") {
      setDark();
    } else {
      setLight();
    }
    setDarkMode(!darkMode);
    toast.success("Theme Changed!");
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  return (
    <div>
         <IconButton onClick={()=>setOpen(true)}><MenuRoundedIcon className="link"/></IconButton> 
          <Drawer
            anchor={"right"}
            open={open}
            onClose={()=>setOpen(false)}
          >
          <div className='drawer-div'>
          <Switch checked={darkMode} onClick={() => changeMode()} />
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
