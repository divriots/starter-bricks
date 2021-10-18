import * as React from 'react';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemAvatar } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Avatar } from '@mui/material';
import { BeachAccess as BeachAccessIcon } from '@mui/icons-material';
import { Divider } from '@mui/material';
import { Typography } from '@mui/material';

export default function SubheaderDividers() {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <Divider component="li" />
      <li>
        <Typography
          sx={{ mt: 0.5, ml: 2 }}
          color="text.secondary"
          display="block"
          variant="caption"
        >
          Divider
        </Typography>
      </li>
      <ListItem>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <Divider component="li" variant="inset" />
      <li>
        <Typography
          sx={{ mt: 0.5, ml: 9 }}
          color="text.secondary"
          display="block"
          variant="caption"
        >
          Leisure
        </Typography>
      </li>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
  );
}
