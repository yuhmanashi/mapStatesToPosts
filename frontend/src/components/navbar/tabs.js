import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function HomeTabs() {
  const [value, setValue] = React.useState(-1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //all states - open sidebar of all states
  //show trending states
  //create post - opens create post modal

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs sx={{ minHeight: 0 }} value={value} onChange={handleChange} centered>
        <Tab sx={{ minHeight: 0, px: 1.5, py: 1 }} label="All States"></Tab>
        <Tab sx={{ minHeight: 0, px: 1.5, py: 1 }} label="Trending" />
        <Tab sx={{ minHeight: 0, px: 1.5, py: 1 }} label="Create Post" />
      </Tabs>
    </Box>
  );
}