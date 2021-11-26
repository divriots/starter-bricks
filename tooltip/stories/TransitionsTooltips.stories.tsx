import * as React from 'react';
import { Button } from '~/button';
import { Tooltip } from '~/tooltip';
import { Fade } from '@mui/material';
import { Zoom } from '@mui/material';

function TransitionsTooltips_() {
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

export const TransitionsTooltips = () => <TransitionsTooltips_ />;
