import * as React from 'react';
import { Button } from '~/button';
import { Tooltip } from '~/tooltip';

function ArrowTooltips_() {
  return (
    <Tooltip title="Add" arrow>
      <Button>Arrow</Button>
    </Tooltip>
  );
}

export const ArrowTooltips = () => <ArrowTooltips_ />;
