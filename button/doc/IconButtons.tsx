import * as React from 'react';
import { IconButton } from '@mui/material';
import { Stack } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { Alarm as AlarmIcon } from '@mui/icons-material';
import { AddShoppingCart as AddShoppingCartIcon } from '@mui/icons-material';

export default function IconButtons() {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
    </Stack>
  );
}
