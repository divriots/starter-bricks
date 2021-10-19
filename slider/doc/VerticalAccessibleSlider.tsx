import * as React from 'react';
import { Box } from '@mui/material';
import { Slider } from '~/slider';

export default function VerticalSlider() {
  function preventHorizontalKeyboardNavigation(event: React.KeyboardEvent) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
    }
  }

  return (
    <Box sx={{ height: 300 }}>
      <Slider
        sx={{
          '& input[type="range"]': {
            WebkitAppearance: 'slider-vertical',
          },
        }}
        orientation="vertical"
        defaultValue={30}
        aria-label="Temperature"
        onKeyDown={preventHorizontalKeyboardNavigation}
      />
    </Box>
  );
}
