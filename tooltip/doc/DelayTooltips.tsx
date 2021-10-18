import * as React from 'react';
import { Button } from '@mui/material';
import { Tooltip } from '@mui/material';

export default function DelayTooltips() {
  return (
    <Tooltip title="Add" enterDelay={500} leaveDelay={200}>
      <Button>[500ms, 200ms]</Button>
    </Tooltip>
  );
}
