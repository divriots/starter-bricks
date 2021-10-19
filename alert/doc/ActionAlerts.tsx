import * as React from 'react';
import { Alert } from '~/alert';

import { Button } from '~/button';

import { Stack } from '@mui/material';

export default function ActionAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
      <Alert
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        This is a success alert — check it out!
      </Alert>
    </Stack>
  );
}
