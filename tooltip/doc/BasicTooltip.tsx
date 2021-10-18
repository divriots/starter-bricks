import * as React from 'react';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Tooltip } from '@mui/material';

export default function BasicTooltip() {
  return (
    <Tooltip title="Delete">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
}
