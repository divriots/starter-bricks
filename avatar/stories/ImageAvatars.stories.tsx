import * as React from 'react';
import { Avatar } from '~/avatar';
import { Stack } from '~/stack';

function ImageAvatars_() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/1.jpg"
      />
      <Avatar
        alt="Travis Howard"
        src="https://mui.com/static/images/avatar/2.jpg"
      />
      <Avatar
        alt="Cindy Baker"
        src="https://mui.com/static/images/avatar/3.jpg"
      />
    </Stack>
  );
}

export const ImageAvatars = () => <ImageAvatars_ />;
