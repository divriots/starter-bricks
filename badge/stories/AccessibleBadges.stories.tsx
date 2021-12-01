import * as React from 'react';
import { IconButton } from '@mui/material';
import { Badge } from '~/badge';
import { Mail as MailIcon } from '@mui/icons-material';

function notificationsLabel(count: number) {
  if (count === 0) {
    return 'no notifications';
  }
  if (count > 99) {
    return 'more than 99 notifications';
  }
  return `${count} notifications`;
}

function AccessibleBadges_() {
  return (
    <IconButton aria-label={notificationsLabel(100)}>
      <Badge badgeContent={100} color="secondary">
        <MailIcon />
      </Badge>
    </IconButton>
  );
}

export const AccessibleBadges = () => <AccessibleBadges_ />;
