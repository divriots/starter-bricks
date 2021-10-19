import * as React from 'react';
import { Box } from '@mui/material';
import { Stack } from '@mui/material';
import { Slider } from '~/slider';

import { VolumeDown } from '@mui/icons-material';
import { VolumeUp } from '@mui/icons-material';

export default function ContinuousSlider() {
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
