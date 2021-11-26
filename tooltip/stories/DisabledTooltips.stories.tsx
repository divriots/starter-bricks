import * as React from 'react';
import { Button } from '~/button';
import { Tooltip } from '~/tooltip';

function DisabledTooltips_() {
  return (
    <Tooltip title="You don't have permission to do this">
      <span>
        <Button disabled>A Disabled Button</Button>
      </span>
    </Tooltip>
  );
}

export const DisabledTooltips = () => <DisabledTooltips_ />;
