import * as React from 'react';
import { Stack } from '~/stack';
import { IconButton } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

function IconButtonSizes_() {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton aria-label="delete" size="small">
        <DeleteIcon fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="delete" size="small">
        <DeleteIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="delete" size="large">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" size="large">
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </Stack>
  );
}

export const IconButtonSizes = () => <IconButtonSizes_ />;
