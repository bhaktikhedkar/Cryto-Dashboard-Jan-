import React,{useState,useEffect} from "react";
import Button from "../Button/Button";
import TemporaryDrawer from "./Drawer";
import "./Header.css";
import { Tooltip } from "@mui/material";
import Switch from "@mui/material/Switch";
import { toast } from "react-toastify";

function Header() {
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
    <div className="header">
      <a href="/">
        <Tooltip title ="Back Home">
        <h1 style={{ cursor: "pointer" }}>
          CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
        </h1>
        </Tooltip>
      </a>
      <div className="links">
      <Switch checked={darkMode} onClick={() => changeMode()} />

        <a href="/">
          <p className="link">HOME</p>
        </a>
        <a href="/compare">
          <p className="link">COMPARE</p>
        </a>
        <a href="/watchlist">
          <p className="link">WATCHLIST</p>
        </a>

        <a href="/dashboard">
          <Button text={"DASHBOARD"} />
        </a>


      </div>
      <div className="drawer-component">
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;
