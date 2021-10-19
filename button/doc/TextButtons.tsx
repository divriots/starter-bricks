import * as React from 'react';
import { Button } from '~/button';

import { Stack } from '@mui/material';

export default function TextButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
    </Stack>
  );
}
