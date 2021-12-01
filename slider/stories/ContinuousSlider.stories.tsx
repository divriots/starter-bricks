import * as React from 'react';
import { Box } from '~/box';
import { Stack } from '~/stack';
import { Slider } from '~/slider';
import { VolumeDown } from '@mui/icons-material';
import { VolumeUp } from '@mui/icons-material';

function ContinuousSlider_() {
  const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        <VolumeUp />
      </Stack>
      <Slider disabled defaultValue={30} aria-label="Disabled slider" />
    </Box>
  );
}

export const ContinuousSlider = () => <ContinuousSlider_ />;
