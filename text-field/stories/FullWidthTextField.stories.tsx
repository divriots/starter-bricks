import * as React from 'react';
import { Box } from '~/box';
import { TextField } from '~/text-field';

function FullWidthTextField_() {
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

export const FullWidthTextField = () => <FullWidthTextField_ />;
