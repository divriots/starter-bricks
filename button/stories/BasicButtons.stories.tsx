import * as React from 'react';
import { Stack } from '~/stack';
import { Button } from '~/button';

function BasicButtons_() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}

export const BasicButtons = () => <BasicButtons_ />;
