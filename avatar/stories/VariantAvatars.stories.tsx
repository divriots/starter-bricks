import * as React from 'react';
import { Avatar } from '~/avatar';
import { Stack } from '~/stack';
import { deepOrange, green } from '@mui/material/colors';
import { Assignment as AssignmentIcon } from '@mui/icons-material';

function VariantAvatars_() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
        N
      </Avatar>
      <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
        <AssignmentIcon />
      </Avatar>
    </Stack>
  );
}

export const VariantAvatars = () => <VariantAvatars_ />;
