import * as React from 'react';
import { Button } from '@mui/material';
import { Tooltip } from '@mui/material';

export default function NotInteractiveTooltips() {
  return (
    <Tooltip title="Add" disableInteractive>
      <Button>Not interactive</Button>
    </Tooltip>
  );
}
