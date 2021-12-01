import * as React from 'react';
import { Tabs } from '~/tabs';
import { Tab } from '@mui/material';
import { Box } from '~/box';

function AccessibleTabs2_() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        onChange={handleChange}
        value={value}
        aria-label="Tabs where each tab needs to be selected manually"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Box>
  );
}

export const AccessibleTabs2 = () => <AccessibleTabs2_ />;
