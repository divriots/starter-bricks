import * as React from 'react';
import { Badge } from '~/badge';

import { Mail as MailIcon } from '@mui/icons-material';

export default function SimpleBadge() {
  return (
    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
  );
}
