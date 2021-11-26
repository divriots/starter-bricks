import * as React from 'react';
import { MenuList } from '~/menu';
import { MenuItem } from '~/menu';
import { Paper } from '~/paper';
import { ListItemIcon } from '@mui/material';
import { Typography } from '~/typography';
import { Drafts as DraftsIcon } from '@mui/icons-material';
import { Send as SendIcon } from '@mui/icons-material';
import { PriorityHigh as PriorityHighIcon } from '@mui/icons-material';

function TypographyMenu_() {
  return (
    <Paper sx={{ width: 230 }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">A short message</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PriorityHighIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">
            A very long text that overflows
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            A very long text that overflows
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}

export const TypographyMenu = () => <TypographyMenu_ />;
