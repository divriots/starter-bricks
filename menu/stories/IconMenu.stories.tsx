import * as React from 'react';
import { Divider } from '~/divider';
import { Paper } from '~/paper';
import { MenuList } from '~/menu';
import { MenuItem } from '~/menu';
import { ListItemText } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { Typography } from '~/typography';
import { ContentCut } from '@mui/icons-material';
import { ContentCopy } from '@mui/icons-material';
import { ContentPaste } from '@mui/icons-material';
import { Cloud } from '@mui/icons-material';

function IconMenu_() {
  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cut</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentCopy fontSize="small" />
          </ListItemIcon>
          <ListItemText>Copy</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘C
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon>
          <ListItemText>Paste</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘V
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}

export const IconMenu = () => <IconMenu_ />;
