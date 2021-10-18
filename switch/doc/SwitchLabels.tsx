import * as React from 'react';
import { FormGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Switch } from '@mui/material';

export default function SwitchLabels() {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Label" />
      <FormControlLabel disabled control={<Switch />} label="Disabled" />
    </FormGroup>
  );
}
