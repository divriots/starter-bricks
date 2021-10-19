import * as React from 'react';
import { Button } from '~/button';

import { Tooltip } from '~/tooltip';

export default function ArrowTooltips() {
  return (
    <Tooltip title="Add" arrow>
      <Button>Arrow</Button>
    </Tooltip>
  );
}
