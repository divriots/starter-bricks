import * as React from 'react';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemText } from '@mui/material';
import { ListItemAvatar } from '@mui/material';
import { Avatar } from '@mui/material';
import { Image as ImageIcon } from '@mui/icons-material';
import { Work as WorkIcon } from '@mui/icons-material';
import { BeachAccess as BeachAccessIcon } from '@mui/icons-material';

export default function FolderList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
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
