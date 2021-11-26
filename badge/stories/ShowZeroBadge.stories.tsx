import * as React from 'react';
import { Stack } from '~/stack';
import { Badge } from '~/badge';
import { Mail as MailIcon } from '@mui/icons-material';

function ShowZeroBadge_() {
  return (
    <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
      <Badge color="secondary" badgeContent={0}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={0} showZero>
        <MailIcon />
      </Badge>
    </Stack>
  );
}

export const ShowZeroBadge = () => <ShowZeroBadge_ />;
