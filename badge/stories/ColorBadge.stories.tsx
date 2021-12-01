import * as React from 'react';
import { Badge } from '~/badge';
import { Stack } from '~/stack';
import { Mail as MailIcon } from '@mui/icons-material';

function ColorBadge_() {
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

export const ColorBadge = () => <ColorBadge_ />;
