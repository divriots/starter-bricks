import * as React from 'react';
import { Stack } from '~/stack';
import { TextField } from '~/text-field';

function TextFieldHiddenLabel_() {
  return (
    <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Small"
        variant="filled"
        size="small"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Normal"
        variant="filled"
      />
    </Stack>
  );
}

export const TextFieldHiddenLabel = () => <TextFieldHiddenLabel_ />;
