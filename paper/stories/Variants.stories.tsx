import * as React from 'react';
import { Box } from '~/box';
import { Paper } from '~/paper';

function Variants_() {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper variant="outlined" />
      <Paper variant="outlined" square />
    </Box>
  );
}

export const Variants = () => <Variants_ />;
