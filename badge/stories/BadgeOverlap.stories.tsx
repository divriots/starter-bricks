import * as React from 'react';
import { Box } from '~/box';
import { Stack } from '~/stack';
import { Badge } from '~/badge';

const shapeStyles = { bgcolor: 'primary.main', width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: '50%' };
const rectangle = <Box component="span" sx={shapeStyles} />;
const circle = (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);

function BadgeOverlap_() {
  return (
    <Stack spacing={3} direction="row">
      <Badge color="secondary" badgeContent=" ">
        {rectangle}
      </Badge>
      <Badge color="secondary" badgeContent=" " variant="dot">
        {rectangle}
      </Badge>
      <Badge color="secondary" overlap="circular" badgeContent=" ">
        {circle}
      </Badge>
      <Badge
        color="secondary"
        overlap="circular"
        badgeContent=" "
        variant="dot"
      >
        {circle}
      </Badge>
    </Stack>
  );
}

export const BadgeOverlap = () => <BadgeOverlap_ />;
