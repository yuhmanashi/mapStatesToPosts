import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function HomeTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs sx={{ minHeight: 0 }} value={value} onChange={handleChange} centered>
        <Tab sx={{ minHeight: 0, py: 1 }} label="Item One" />
        <Tab sx={{ minHeight: 0, py: 1 }} label="Item Two" />
        <Tab sx={{ minHeight: 0, py: 1 }} label="Item Three" />
      </Tabs>
    </Box>
  );
}