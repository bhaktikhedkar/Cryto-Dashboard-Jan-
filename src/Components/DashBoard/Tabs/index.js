import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import "./style.css";
import Grid from '../Grid/Grid';



export default function TabsComponent({coins}) {
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
        {coins.map((coin, i) => (
         <Grid coin={coin} key={i} />
          ) )}
        </div>
        </TabPanel>
        <TabPanel value="list">Item Two</TabPanel>
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