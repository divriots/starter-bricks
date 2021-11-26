import * as React from 'react';
import { Alert } from '~/alert';
import { Check as CheckIcon } from '@mui/icons-material';
import { CheckCircleOutline as CheckCircleOutlineIcon } from '@mui/icons-material';
import { Stack } from '~/stack';

function IconAlerts_() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        This is a success alert — check it out!
      </Alert>
      <Alert
        iconMapping={{
          success: <CheckCircleOutlineIcon fontSize="inherit" />,
        }}
      >
        This is a success alert — check it out!
      </Alert>
      <Alert icon={false} severity="success">
        This is a success alert — check it out!
      </Alert>
    </Stack>
  );
}

export const IconAlerts = () => <IconAlerts_ />;
