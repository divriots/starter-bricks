import * as React from 'react';

import { Box } from '@mui/material';
import { Slider } from '~/slider';

export default function SliderSizes() {
  return (
    <Box width={300}>
      <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
    </Box>
  );
}
