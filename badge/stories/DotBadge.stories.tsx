import * as React from 'react';
import { Box } from '~/box';
import { Badge } from '~/badge';
import { Mail as MailIcon } from '@mui/icons-material';

function DotBadge_() {
  return (
    <Box sx={{ color: 'action.active' }}>
      <Badge color="secondary" variant="dot">
        <MailIcon />
      </Badge>
    </Box>
  );
}

export const DotBadge = () => <DotBadge_ />;
