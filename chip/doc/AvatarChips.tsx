import * as React from 'react';
import { Avatar } from '~/avatar';

import { Chip } from '~/chip';

import { Stack } from '@mui/material';

export default function AvatarChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
      <Chip
        avatar={
          <Avatar
            alt="Natacha"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
        }
        label="Avatar"
        variant="outlined"
      />
    </Stack>
  );
}
