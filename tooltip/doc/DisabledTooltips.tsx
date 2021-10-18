import * as React from 'react';
import { Button } from '@mui/material';
import { Tooltip } from '@mui/material';

export default function DisabledTooltips() {
  return (
    <Tooltip title="You don't have permission to do this">
      <span>
        <Button disabled>A Disabled Button</Button>
      </span>
    </Tooltip>
  );
}
