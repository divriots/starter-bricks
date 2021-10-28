import * as React from 'react';
import { Button } from '~/button';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { Send as SendIcon } from '@mui/icons-material';
import { Stack } from '~/stack';

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  );
}
