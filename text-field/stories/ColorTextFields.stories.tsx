import * as React from 'react';
import { Box } from '~/box';
import { TextField } from '~/text-field';

function ColorTextFields_() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Outlined secondary" color="secondary" focused />
      <TextField
        label="Filled success"
        variant="filled"
        color="success"
        focused
      />
      <TextField
        label="Standard warning"
        variant="standard"
        color="warning"
        focused
      />
    </Box>
  );
}

export const ColorTextFields = () => <ColorTextFields_ />;
