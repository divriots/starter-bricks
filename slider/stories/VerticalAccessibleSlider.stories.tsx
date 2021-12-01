import * as React from 'react';
import { Box } from '~/box';
import { Slider } from '~/slider';

function VerticalSlider_() {
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

export const VerticalSlider = () => <VerticalSlider_ />;
