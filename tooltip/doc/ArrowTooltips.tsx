import * as React from 'react';
import { Button } from '@mui/material';
import { Tooltip } from '@mui/material';

export default function ArrowTooltips() {
  return (
    <Tooltip title="Add" arrow>
      <Button>Arrow</Button>
    </Tooltip>
  );
}
