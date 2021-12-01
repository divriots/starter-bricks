import * as React from 'react';
import { Box } from '~/box';
import { Tooltip } from '~/tooltip';

function FollowCursorTooltips_() {
  return (
    <Tooltip title="You don't have permission to do this" followCursor>
      <Box sx={{ bgcolor: 'text.disabled', color: 'background.paper', p: 2 }}>
        Disabled Action
      </Box>
    </Tooltip>
  );
}

export const FollowCursorTooltips = () => <FollowCursorTooltips_ />;
