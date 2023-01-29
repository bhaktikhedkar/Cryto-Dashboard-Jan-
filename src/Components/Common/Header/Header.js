import React from "react";
import Button from "../Button/Button";
import TemporaryDrawer from "./Drawer";
import "./Header.css";
import { Tooltip } from "@mui/material";

function Header() {
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
