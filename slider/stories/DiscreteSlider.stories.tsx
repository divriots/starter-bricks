import * as React from 'react';
import { Box } from '~/box';
import { Slider } from '~/slider';

function valuetext(value: number) {
  return `${value}°C`;
}

function DiscreteSlider_() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
      <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
    </Box>
  );
}

export const DiscreteSlider = () => <DiscreteSlider_ />;
