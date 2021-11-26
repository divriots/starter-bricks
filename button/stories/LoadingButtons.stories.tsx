import * as React from 'react';
import { LoadingButton } from '@mui/lab';
import { Save as SaveIcon } from '@mui/icons-material';
import { Stack } from '~/stack';

function LoadingButtons_() {
  return (
    <Stack direction="row" spacing={2}>
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
      <LoadingButton loading loadingIndicator="Loading..." variant="outlined">
        Fetch data
      </LoadingButton>
      <LoadingButton
        loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
      >
        Save
      </LoadingButton>
    </Stack>
  );
}

export const LoadingButtons = () => <LoadingButtons_ />;
