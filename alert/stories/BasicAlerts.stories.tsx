import * as React from 'react';
import { Alert } from '~/alert';
import { Stack } from '~/stack';

function BasicAlerts_() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </Stack>
  );
}

export const BasicAlerts = () => <BasicAlerts_ />;
