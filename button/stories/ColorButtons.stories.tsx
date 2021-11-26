import * as React from 'react';
import { Stack } from '~/stack';
import { Button } from '~/button';

function ColorButtons_() {
  return (
    <Stack direction="row" spacing={2}>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </Stack>
  );
}

export const ColorButtons = () => <ColorButtons_ />;
