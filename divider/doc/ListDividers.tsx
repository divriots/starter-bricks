import * as React from 'react';
import { List } from '~/list';

import { ListItem } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Divider } from '~/divider';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

export default function ListDividers() {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
  );
}
