import * as React from 'react';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import { Tooltip } from '@mui/material';

export default function AccessibilityTooltips() {
  return (
    <div>
      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip describeChild title="Does not add if it already exists.">
        <Button>Add</Button>
      </Tooltip>
    </div>
  );
}
