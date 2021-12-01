import * as React from 'react';
import { FormatAlignLeft as FormatAlignLeftIcon } from '@mui/icons-material';
import { FormatAlignCenter as FormatAlignCenterIcon } from '@mui/icons-material';
import { FormatAlignRight as FormatAlignRightIcon } from '@mui/icons-material';
import { Laptop as LaptopIcon } from '@mui/icons-material';
import { Tv as TvIcon } from '@mui/icons-material';
import { PhoneAndroid as PhoneAndroidIcon } from '@mui/icons-material';
import { Stack } from '~/stack';
import { ToggleButton } from '~/toggle-button';
import { ToggleButtonGroup } from '@mui/material';

function ToggleButtonNotEmpty_() {
  const [alignment, setAlignment] = React.useState('left');
  const [devices, setDevices] = React.useState(() => ['phone']);

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const handleDevices = (
    event: React.MouseEvent<HTMLElement>,
    newDevices: string[]
  ) => {
    if (newDevices.length) {
      setDevices(newDevices);
    }
  };

  return (
    <Stack direction="row" spacing={4}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <FormatAlignCenterIcon />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <FormatAlignRightIcon />
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup
        value={devices}
        onChange={handleDevices}
        aria-label="device"
      >
        <ToggleButton value="laptop" aria-label="laptop">
          <LaptopIcon />
        </ToggleButton>
        <ToggleButton value="tv" aria-label="tv">
          <TvIcon />
        </ToggleButton>
        <ToggleButton value="phone" aria-label="phone">
          <PhoneAndroidIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}

export const ToggleButtonNotEmpty = () => <ToggleButtonNotEmpty_ />;
