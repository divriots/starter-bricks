import * as React from 'react';
import { Stack } from '~/stack';
import { Button } from '~/button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
