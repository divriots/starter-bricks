import * as React from 'react';
import { Avatar } from '~/avatar';
import { Stack } from '~/stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

function LetterAvatars_() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar>H</Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
    </Stack>
  );
}

export const LetterAvatars = () => <LetterAvatars_ />;
