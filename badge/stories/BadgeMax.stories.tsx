import * as React from 'react';
import { Stack } from '~/stack';
import { Badge } from '~/badge';
import { Mail as MailIcon } from '@mui/icons-material';

function BadgeMax_() {
  return (
    <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
      <Badge color="secondary" badgeContent={99}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={100}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={1000} max={999}>
        <MailIcon />
      </Badge>
    </Stack>
  );
}

export const BadgeMax = () => <BadgeMax_ />;
