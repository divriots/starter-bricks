import * as React from 'react';
import { alpha, styled } from '@mui/material';
import { pink } from '@mui/material/colors';
import { Switch } from '~/switch';

const GreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}));

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function ColorSwitches_() {
  return (
    <div>
      <Switch {...label} defaultChecked />
      <Switch {...label} defaultChecked color="secondary" />
      <Switch {...label} defaultChecked color="warning" />
      <Switch {...label} defaultChecked color="default" />
      <GreenSwitch {...label} defaultChecked />
    </div>
  );
}

export const ColorSwitches = () => <ColorSwitches_ />;
