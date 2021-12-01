import * as React from 'react';
import { Badge } from '~/badge';
import { Mail as MailIcon } from '@mui/icons-material';

function SimpleBadge_() {
  return (
    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
  );
}

export const SimpleBadge = () => <SimpleBadge_ />;
