import * as React from 'react';
import { Tabs } from '~/tabs';
import { Tab } from '@mui/material';

function DisabledTabs_() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="disabled tabs example"
    >
      <Tab label="Active" />
      <Tab label="Disabled" disabled />
      <Tab label="Active" />
    </Tabs>
  );
}

export const DisabledTabs = () => <DisabledTabs_ />;
