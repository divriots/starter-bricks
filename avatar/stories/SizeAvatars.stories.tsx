import * as React from 'react';
import { Avatar } from '~/avatar';
import { Stack } from '~/stack';

function ImageAvatars_() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/1.jpg"
        sx={{ width: 24, height: 24 }}
      />
      <Avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/1.jpg"
      />
      <Avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />
    </Stack>
  );
}

export const ImageAvatars = () => <ImageAvatars_ />;
