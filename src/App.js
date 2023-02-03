
import './App.css';
import {BrowserRouter, Route ,Routes} from "react-router-dom" ;  //install react-router-dom
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import { createTheme, ThemeProvider } from '@mui/material';
import Coin from './Pages/Coin';
import Compare from './Pages/Compare';
import Watchlist from './Pages/Watchlist';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";

function App() {
   //If you wish to customize the theme(in MUI), 
 //you need to use the ThemeProvider component in order to inject a theme into your application. 
 //However, this is optional; MUI components come with a default theme.
 //For this install createTheme and ThemeProvider from @mui/material
 const theme = createTheme({
  palette :{
      primary :{
          main : "#3a80e9",
      },
  },
});

var cursor;
var cursorPointer;

useEffect(() => {
  cursor = document.getElementById("cursor");
  cursorPointer = document.getElementById("cursor-pointer");

  document.body.addEventListener("mousemove", function (e) {
    return (
      (cursor.style.left = e.clientX + "px"),
      (cursor.style.top = e.clientY + "px"),
      (cursorPointer.style.left = e.clientX + "px"),
      (cursorPointer.style.top = e.clientY + "px")
    );
  });

  document.body.addEventListener("mousedown", function (e) {
    return (
      (cursor.style.height = "0.5rem"),
      (cursor.style.width = "0.5rem"),
      (cursorPointer.style.height = "3rem"),
      (cursorPointer.style.width = "3rem")
    );
  });

  document.body.addEventListener("mouseup", function (e) {
    return (
      (cursor.style.height = "0.3rem"),
      (cursor.style.width = "0.3rem"),
      (cursorPointer.style.height = "2rem"),
      (cursorPointer.style.width = "2rem")
    );
  });
}, []);
  return (
    <div className="App">
       <div className="cursor" id="cursor" />
      <div className="cursor-pointer" id="cursor-pointer" />
      <ToastContainer />
    <ThemeProvider theme={theme}>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        {/* dynamic routing - " /:id "  - this is the ID - this is url parameter - hence we imported useParams hook*/}
        {/* <Route path="/coin/:id" element={<Coin />}></Route> */}
        <Route path="/coin/:id" element={<Coin />}/>
        <Route path="/compare" element={<Compare />}/>
        <Route path="/watchlist" element={<Watchlist />}/>
      </Routes>
      </BrowserRouter>
   </ThemeProvider>
   </div>
  );
}

export default App;
