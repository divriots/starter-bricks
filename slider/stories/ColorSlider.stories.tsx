import * as React from 'react';
import { Box } from '~/box';
import { Slider } from '~/slider';

function valuetext(value: number) {
  return `${value}°C`;
}

function ColorSlider_() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        color="secondary"
      />
    </Box>
  );
}

export const ColorSlider = () => <ColorSlider_ />;
