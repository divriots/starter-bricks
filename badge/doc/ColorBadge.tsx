import * as React from 'react';
import { Badge } from '@mui/material';
import { Stack } from '@mui/material';
import { Mail as MailIcon } from '@mui/icons-material';

export default function ColorBadge() {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={4} color="secondary">
        <MailIcon color="action" />
      </Badge>
      <Badge badgeContent={4} color="success">
        <MailIcon color="action" />
      </Badge>
    </Stack>
  );
}
