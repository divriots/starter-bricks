import * as React from 'react';
import { Box } from '~/box';
import { Slider } from '~/slider';

function valuetext(value: number) {
  return `${value}°C`;
}

function DiscreteSliderSteps_() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Small steps"
        defaultValue={0.00000005}
        getAriaValueText={valuetext}
        step={0.00000001}
        marks
        min={-0.00000005}
        max={0.0000001}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}

export const DiscreteSliderSteps = () => <DiscreteSliderSteps_ />;
