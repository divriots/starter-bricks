import * as React from 'react';
import { Box } from '~/box';
import { Paper } from '~/paper';

function SimplePaper_() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={0} />
      <Paper />
      <Paper elevation={3} />
    </Box>
  );
}

export const SimplePaper = () => <SimplePaper_ />;
