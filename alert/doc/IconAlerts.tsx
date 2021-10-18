import * as React from 'react';
import { Alert } from '@mui/material';
import { Check as CheckIcon } from '@mui/icons-material';
import { CheckCircleOutline as CheckCircleOutlineIcon } from '@mui/icons-material';
import { Stack } from '@mui/material';

export default function IconAlerts() {
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
