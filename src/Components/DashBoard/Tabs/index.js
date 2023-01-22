import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';



export default function TabsComponent() {
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
        <TabPanel value="grid">Item One</TabPanel>
        <TabPanel value="list">Item Two</TabPanel>
      </TabContext>
     

  );
}
