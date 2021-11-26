import * as React from 'react';
import { Button } from '~/button';
import { Stack } from '~/stack';

function OutlinedButtons_() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined">Primary</Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        Link
      </Button>
    </Stack>
  );
}

export const OutlinedButtons = () => <OutlinedButtons_ />;
