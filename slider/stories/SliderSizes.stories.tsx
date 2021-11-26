import * as React from 'react';

import { Box } from '~/box';
import { Slider } from '~/slider';

function SliderSizes_() {
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

export const SliderSizes = () => <SliderSizes_ />;
