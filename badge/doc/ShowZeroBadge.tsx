import * as React from 'react';
import { Stack } from '@mui/material';
import { Badge } from '@mui/material';
import { Mail as MailIcon } from '@mui/icons-material';

export default function ShowZeroBadge() {
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
