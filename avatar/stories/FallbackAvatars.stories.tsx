import * as React from 'react';
import { Avatar } from '~/avatar';
import { Stack } from '~/stack';
import { deepOrange } from '@mui/material/colors';

function FallbackAvatars_() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt="Remy Sharp"
        src="/broken-image.jpg"
      >
        B
      </Avatar>
      <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt="Remy Sharp"
        src="/broken-image.jpg"
      />
      <Avatar src="/broken-image.jpg" />
    </Stack>
  );
}

export const FallbackAvatars = () => <FallbackAvatars_ />;
