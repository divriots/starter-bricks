import * as React from 'react';
import { styled } from '@mui/material';
import { Box } from '~/box';
import { FormControl } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { FormLabel } from '@mui/material';
import { Radio } from '~/radio-button';
import { RadioGroup } from '@mui/material';
import { Switch } from '~/switch';
import { SpeedDial } from '~/speed-dial';
import { SpeedDialProps } from '@mui/material';
import { SpeedDialIcon } from '@mui/material';
import { SpeedDialAction } from '@mui/material';
import { FileCopyOutlined as FileCopyIcon } from '@mui/icons-material';
import { Save as SaveIcon } from '@mui/icons-material';
import { Print as PrintIcon } from '@mui/icons-material';
import { Share as ShareIcon } from '@mui/icons-material';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

function PlaygroundSpeedDial_() {
  const [direction, setDirection] =
    React.useState<SpeedDialProps['direction']>('up');
  const [hidden, setHidden] = React.useState(false);

  const handleDirectionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDirection(
      (event.target as HTMLInputElement).value as SpeedDialProps['direction']
    );
  };

  const handleHiddenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHidden(event.target.checked);
  };

  return (
    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
      <FormControlLabel
        control={
          <Switch
            checked={hidden}
            onChange={handleHiddenChange}
            color="primary"
          />
        }
        label="Hidden"
      />
      <FormControl component="fieldset" sx={{ mt: 1, display: 'flex' }}>
        <FormLabel component="legend">Direction</FormLabel>
        <RadioGroup
          aria-label="direction"
          name="direction"
          value={direction}
          onChange={handleDirectionChange}
          row
        >
          <FormControlLabel value="up" control={<Radio />} label="Up" />
          <FormControlLabel value="right" control={<Radio />} label="Right" />
          <FormControlLabel value="down" control={<Radio />} label="Down" />
          <FormControlLabel value="left" control={<Radio />} label="Left" />
        </RadioGroup>
      </FormControl>
      <Box sx={{ position: 'relative', mt: 3, height: 320 }}>
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          hidden={hidden}
          icon={<SpeedDialIcon />}
          direction={direction}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </StyledSpeedDial>
      </Box>
    </Box>
  );
}

export const PlaygroundSpeedDial = () => <PlaygroundSpeedDial_ />;
