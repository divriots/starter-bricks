import * as React from 'react';
import { Avatar } from '~/avatar';
import { AvatarGroup } from '@mui/material';

function GroupAvatars_() {
  return (
    <AvatarGroup max={4}>
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
      <Avatar
        alt="Agnes Walker"
        src="https://mui.com/static/images/avatar/4.jpg"
      />
      <Avatar
        alt="Trevor Henderson"
        src="https://mui.com/static/images/avatar/5.jpg"
      />
    </AvatarGroup>
  );
}

export const GroupAvatars = () => <GroupAvatars_ />;
