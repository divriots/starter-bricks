import * as React from 'react';
import { Box } from '@mui/material';
import { TextField } from '~/text-field';

export default function FullWidthTextField() {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="fullWidth" id="fullWidth" />
    </Box>
  );
}
