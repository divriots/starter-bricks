import * as React from 'react';
import { Box } from '~/box';
import { TextField } from '~/text-field';

function HelperTextMisaligned_() {
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
        id="demo-helper-text-misaligned"
        label="Name"
      />
      <TextField id="demo-helper-text-misaligned-no-helper" label="Name" />
    </Box>
  );
}

export const HelperTextMisaligned = () => <HelperTextMisaligned_ />;
