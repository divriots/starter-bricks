import * as React from 'react';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { Button } from '~/button';
import { IconButton } from '@mui/material';
import { Tooltip } from '~/tooltip';

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
