import * as React from 'react';
import { Stack } from '~/stack';
import { IconButton } from '@mui/material';
import { Fingerprint } from '@mui/icons-material';

function IconButtonColors_() {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="fingerprint" color="secondary">
        <Fingerprint />
      </IconButton>
      <IconButton aria-label="fingerprint" color="success">
        <Fingerprint />
      </IconButton>
    </Stack>
  );
}

export const IconButtonColors = () => <IconButtonColors_ />;
