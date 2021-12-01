import * as React from 'react';
import { Button } from '~/button';
import { Stack } from '~/stack';

function ContainedButtons_() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
    </Stack>
  );
}

export const ContainedButtons = () => <ContainedButtons_ />;
