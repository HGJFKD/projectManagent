import React, { useState } from 'react'

import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Project from './Project';
import CustomTabPanel from './CustomTabPanel';
import { projects } from '../server/DB/projects';
import MuiTab from './Tab';
import Tab from '@mui/material/Tab';

const ScrollableTabs = () => {

  const [data, setdata] = useState(projects);
  const [value, setValue] = useState(0);

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log("newValue", newValue);

    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
                  variant="scrollable"
        scrollButtons="auto"
          aria-label="icon label tabs example"
        >
          {data.map(
            ({ name, id }) => (
              <Tab key={id} label={name} {...a11yProps(id)} />
            )
          )}
        </Tabs>
      </Box>
      {data.map(
        ({ id }) => (
          <CustomTabPanel
            key={id}
            value={value}
            
            index={id}
          >
            <Project />
          </CustomTabPanel>)
      )}

    </Box>

  );
}

export default ScrollableTabs