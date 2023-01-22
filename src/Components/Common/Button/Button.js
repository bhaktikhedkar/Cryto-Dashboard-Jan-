import React from 'react';
import "./Button.css";
//1]making button dynamic
//2]text is the props and onclick as a function.
//3]outlined is the props for the 2 buttons , ie "dashboard" and "share" . 
//  When we move our curser on anyone of them they should hover/ or give the effect shown in figma.
//  Hence we are using CONDITONAL RENDERING HERE
function Button({text, onClick, outlined}) {
  return (
    <div className={outlined ? "btn-outlined" :"btn"} onClick={()=>onClick()}>{text}</div>
  )
}

export default Button