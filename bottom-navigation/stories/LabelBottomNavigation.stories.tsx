import * as React from 'react';
import { BottomNavigation } from '~/bottom-navigation';
import { BottomNavigationAction } from '@mui/material';
import { Folder as FolderIcon } from '@mui/icons-material';
import { Restore as RestoreIcon } from '@mui/icons-material';
import { Favorite as FavoriteIcon } from '@mui/icons-material';
import { LocationOn as LocationOnIcon } from '@mui/icons-material';

function LabelBottomNavigation_() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction
        label="Folder"
        value="folder"
        icon={<FolderIcon />}
      />
    </BottomNavigation>
  );
}

export const LabelBottomNavigation = () => <LabelBottomNavigation_ />;
