import * as React from 'react';
import { Tabs } from '~/tabs';
import { Tab } from '@mui/material';
import { Phone as PhoneIcon } from '@mui/icons-material';
import { Favorite as FavoriteIcon } from '@mui/icons-material';
import { PersonPin as PersonPinIcon } from '@mui/icons-material';

function IconLabelTabs_() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon label tabs example"
    >
      <Tab icon={<PhoneIcon />} label="RECENTS" />
      <Tab icon={<FavoriteIcon />} label="FAVORITES" />
      <Tab icon={<PersonPinIcon />} label="NEARBY" />
    </Tabs>
  );
}

export const IconLabelTabs = () => <IconLabelTabs_ />;
