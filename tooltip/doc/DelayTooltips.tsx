import * as React from 'react';
import { Button } from '~/button';
import { Tooltip } from '~/tooltip';

export default function DelayTooltips() {
  return (
    <Tooltip title="Add" enterDelay={500} leaveDelay={200}>
      <Button>[500ms, 200ms]</Button>
    </Tooltip>
  );
}
