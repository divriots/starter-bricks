import * as React from 'react';
import { Box } from '~/box';
import { Input } from '@mui/material';

const ariaLabel = { 'aria-label': 'description' };

function Inputs_() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Input defaultValue="Hello world" inputProps={ariaLabel} />
      <Input placeholder="Placeholder" inputProps={ariaLabel} />
      <Input disabled defaultValue="Disabled" inputProps={ariaLabel} />
      <Input defaultValue="Error" error inputProps={ariaLabel} />
    </Box>
  );
}

export const Inputs = () => <Inputs_ />;
