import * as React from 'react';
import { Box } from '@mui/material';
import { Badge } from '~/badge';

import { Mail as MailIcon } from '@mui/icons-material';

export default function DotBadge() {
  return (
    <Box sx={{ color: 'action.active' }}>
      <Badge color="secondary" variant="dot">
        <MailIcon />
      </Badge>
    </Box>
  );
}
