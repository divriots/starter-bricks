import * as React from 'react';
import { styled } from '@mui/material';
import { Box } from '~/box';
import { Grid } from '~/grid';
import { Typography } from '~/typography';
import { Slider } from '~/slider';
import { Input as MuiInput } from '@mui/material';
import { VolumeUp } from '@mui/icons-material';

const Input = styled(MuiInput)`
  width: 42px;
`;

function InputSlider_() {
  const [value, setValue] = React.useState<
    number | string | Array<number | string>
  >(30);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="input-slider" gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <VolumeUp />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export const InputSlider = () => <InputSlider_ />;
