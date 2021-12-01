import * as React from 'react';
import { Box } from '~/box';
import { BottomNavigation } from '~/bottom-navigation';
import { BottomNavigationAction } from '@mui/material';
import { Restore as RestoreIcon } from '@mui/icons-material';
import { Favorite as FavoriteIcon } from '@mui/icons-material';
import { LocationOn as LocationOnIcon } from '@mui/icons-material';

function SimpleBottomNavigation_() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}

export const SimpleBottomNavigation = () => <SimpleBottomNavigation_ />;
