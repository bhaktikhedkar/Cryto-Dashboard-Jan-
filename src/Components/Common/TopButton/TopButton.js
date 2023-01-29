import React from 'react';
import NavigationIcon from "@mui/icons-material/Navigation";

function TopButton() {
   //from w3school = scroll to top
  // Get the button
  let mybutton = document.getElementById("top-btn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  };
  return (
    <div
    className="top-btn"
    id="top-btn"
    onClick={() => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }}
  >
    <NavigationIcon />
  </div>
  )
}

export default TopButton

