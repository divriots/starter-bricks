import * as React from 'react';
import { Button } from '~/button';
import { Tooltip } from '~/tooltip';

function NotInteractiveTooltips_() {
  return (
    <Tooltip title="Add" disableInteractive>
      <Button>Not interactive</Button>
    </Tooltip>
  );
}

export const NotInteractiveTooltips = () => <NotInteractiveTooltips_ />;
