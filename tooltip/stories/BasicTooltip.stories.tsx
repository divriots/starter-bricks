import * as React from 'react';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Tooltip } from '~/tooltip';

function BasicTooltip_() {
  return (
    <Tooltip title="Delete">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
}

export const BasicTooltip = () => <BasicTooltip_ />;
