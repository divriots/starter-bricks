import * as React from 'react';
import { Alert } from '~/alert';
import { Button } from '~/button';
import { Stack } from '~/stack';

function ActionAlerts_() {
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

export const ActionAlerts = () => <ActionAlerts_ />;
