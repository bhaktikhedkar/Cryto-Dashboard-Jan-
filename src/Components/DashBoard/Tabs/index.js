import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import "./style.css";
import Grid from '../Grid/Grid';
import List from '../List/List';
import Button from '../../Common/Button/Button';



export default function TabsComponent({coins, setSearch}) {
  const [value, setValue] = React.useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 //changed all box to div , and all sx to style
 //sx - is style in mui

 const style = {
    color: 'var(--white)', 
    "& .Mui-Selected" : { color : "var(--blue)"},
    fontFamily : "inter,sans-serif",
    fontWeight : "600",
    // textTransform : "capitalize",
 }

 
  return (
   
        <TabContext value={value}>
        <div style={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange}  variant="fullWidth">
            <Tab label="Grid" value="grid" sx={style}/>
            {/* "& .Mui-Selected" - it overrides --saw it in the figma , inspect */}
            <Tab label="List" value="list" sx={style}/>
           
          </TabList>
        </div>
        <TabPanel value="grid">  
        <div className='grid-flex'>
          {coins.length > 0 ? (coins.map((coin, i) => (
         <Grid coin={coin} key={i} delay={(i % 4) * 0.2}/>
          ) )) : (<h2 style={{textAlign :"center"}}>Sorry... couldn't find the coin you are looking for.....</h2>)}
          <div style={{width :"100%", display : "flex" , justifyContent : "center" , margin:"2rem",}}>
         <Button text="Clear Search" onClick={()=>setSearch("")}/>
         </div>
        </div>
        </TabPanel>
        <TabPanel value="list">
            <table className='list-flex'>
                <tbody>
                  {coins.length > 0 ?( coins.map((coin, i) => (
                 <List coin={coin} key ={i} delay={(i % 8) * 0.2}/>
          ) )) : (<h2 style={{textAlign :"center"}}>Sorry... couldn't find the coin you are looking for.....</h2>)}
               <div style={{width :"100%", display : "flex" , justifyContent : "center" , margin:"2rem",}}>
         <Button text="Clear Search" onClick={()=>setSearch("")}/>
         </div>
                </tbody>
            
            </table>
        </TabPanel>
      </TabContext>
     

  );
}


/////////////////
// {coins.map((coin, i) => (
//     // <p>{i+1}.{coin.name}</p>
//     <p>
//       {i + 1}.<img src={coin.image} />
//     </p> 
//   ))}

//////////////////////
// {coins.map((coin, i) => (
//     // <p>{i+1}.{coin.name}</p>
//     <p key={i}>
//       {i + 1}.{coin.name}
//     </p> 
//   ))}