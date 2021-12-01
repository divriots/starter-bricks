import * as React from 'react';
import { Box } from '~/box';
import { Tabs } from '~/tabs';
import { Tab } from '@mui/material';

function CenteredTabs_() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Box>
  );
}

export const CenteredTabs = () => <CenteredTabs_ />;
