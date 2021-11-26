import * as React from 'react';
import { List } from '~/list';
import { ListItem } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Comment as CommentIcon } from '@mui/icons-material';
import { IconButton } from '@mui/material';

function GutterlessList_() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[1, 2, 3].map((value) => (
        <ListItem
          key={value}
          disableGutters
          secondaryAction={
            <IconButton>
              <CommentIcon />
            </IconButton>
          }
        >
          <ListItemText primary={`Line item ${value}`} />
        </ListItem>
      ))}
    </List>
  );
}

export const GutterlessList = () => <GutterlessList_ />;
