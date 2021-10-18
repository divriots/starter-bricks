import * as React from 'react';
import { Button } from '@mui/material';
import { Tooltip } from '@mui/material';
import { Fade } from '@mui/material';
import { Zoom } from '@mui/material';

export default function TransitionsTooltips() {
  return (
    <div>
      <Tooltip title="Add">
        <Button>Grow</Button>
      </Tooltip>
      <Tooltip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        title="Add"
      >
        <Button>Fade</Button>
      </Tooltip>
      <Tooltip TransitionComponent={Zoom} title="Add">
        <Button>Zoom</Button>
      </Tooltip>
    </div>
  );
}
