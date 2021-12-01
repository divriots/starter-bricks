import * as React from 'react';
import { Tabs } from '~/tabs';
import { Tab } from '@mui/material';
import { Phone as PhoneIcon } from '@mui/icons-material';
import { Favorite as FavoriteIcon } from '@mui/icons-material';
import { PersonPin as PersonPinIcon } from '@mui/icons-material';
import { PhoneMissed as PhoneMissedIcon } from '@mui/icons-material';

function IconTabs_() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon position tabs example"
    >
      <Tab icon={<PhoneIcon />} label="top" />
      <Tab icon={<PhoneMissedIcon />} iconPosition="start" label="start" />
      <Tab icon={<FavoriteIcon />} iconPosition="end" label="end" />
      <Tab icon={<PersonPinIcon />} iconPosition="bottom" label="bottom" />
    </Tabs>
  );
}

export const IconTabs = () => <IconTabs_ />;
