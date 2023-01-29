import React, { useState } from 'react'
import "./CoinInfo.css";


function CoinInfo({title, desc}) {
    const smallDesc = desc.slice(0,300) + "<br/><p style='color:var(--grey); cursor:pointer;'>Read more..</p>";
    const longDesc = desc + "<br/><p style='color:var(--grey); cursor:pointer;'>Read less..</p>";

    const [toggle ,settoggle] = useState(false);
  return (
    <div className='grey-wrapper info-component' >
        <h1>{title}</h1>
        {/* <p>{desc}</p> */}
        {/* <p dangerouslySetInnerHTML={{__html:smallDesc}} className="info-p" onClick={()=>settoggle(!toggle)}></p> */}

        {/* if toggle is true then , it should be longDesc otherwise smallDesc */}
        {/* if length is greater than 300 , then toggle otherwise show the description */}
        
        <p dangerouslySetInnerHTML={{__html: desc.length >= 300 ? (toggle ? longDesc : smallDesc) : desc}} className="info-p" onClick={()=>settoggle(!toggle)}></p>
    </div>
  )
}

export default CoinInfo

//dangerouslySetInnerHTMl :-
// when there is HTML in the string and when u what render(or show it on the screen),
// we use the HTML property , ie dangerouslySetInnerHTML. 
// In the aboave code , in the paragraph we see anchor tag , whenwe render normally ,
// p>{desc}</p> , to show the content of anchor tag we use dangerouslySetInnerHTML.

// ex :-
// function bhakti(){
//     const htmlString ="<div><h1>Hello</h1><br/><ul><li>123</li></ul></div>";
//     return (
//         <p>{htmlString}</p>
//         // output:<div><h1>Hello</h1><br/><ul><li>123</li></ul></div>
//         <p dangerouslySetInnerHTML={{__html:htmlString}}></p>
//         //output : hello  .123   
  
// }
