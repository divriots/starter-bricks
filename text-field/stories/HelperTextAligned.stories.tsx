import * as React from 'react';
import { Box } from '~/box';
import { TextField } from '~/text-field';

function HelperTextAligned_() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      <TextField
        helperText="Please enter your name"
        id="demo-helper-text-aligned"
        label="Name"
      />
      <TextField
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label="Name"
      />
    </Box>
  );
}

export const HelperTextAligned = () => <HelperTextAligned_ />;
