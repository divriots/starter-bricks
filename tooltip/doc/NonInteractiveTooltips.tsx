import * as React from 'react';
import { Button } from '~/button';
import { Tooltip } from '~/tooltip';

export default function NotInteractiveTooltips() {
  return (
    <Tooltip title="Add" disableInteractive>
      <Button>Not interactive</Button>
    </Tooltip>
  );
}
