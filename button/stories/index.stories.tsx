import * as React from 'react';
import { Stack } from '~/stack';
import { Button } from '~/button';

export function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}

export function ColorButtons() {
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
