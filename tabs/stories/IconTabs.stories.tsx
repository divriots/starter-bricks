import * as React from 'react';
import { Tabs } from '~/tabs';
import { Tab } from '@mui/material';
import { Phone as PhoneIcon } from '@mui/icons-material';
import { Favorite as FavoriteIcon } from '@mui/icons-material';
import { PersonPin as PersonPinIcon } from '@mui/icons-material';

function IconTabs_() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
      <Tab icon={<PhoneIcon />} aria-label="phone" />
      <Tab icon={<FavoriteIcon />} aria-label="favorite" />
      <Tab icon={<PersonPinIcon />} aria-label="person" />
    </Tabs>
  );
}

export const IconTabs = () => <IconTabs_ />;
