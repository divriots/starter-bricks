import * as React from 'react';
import { Box } from '~/box';
import { Slider } from '~/slider';

function valuetext(value: number) {
  return `${value}°C`;
}

function RangeSlider_() {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}

export const RangeSlider = () => <RangeSlider_ />;
