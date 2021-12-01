import * as React from 'react';
import { List } from '~/list';
import { ListItem } from '@mui/material';
import { ListItemButton } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Star as StarIcon } from '@mui/icons-material';

function InsetList_() {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-label="contacts"
    >
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Chelsea Otakan" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText inset primary="Eric Hoffman" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

export const InsetList = () => <InsetList_ />;
