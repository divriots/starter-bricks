import * as React from 'react';
import { Switch } from '~/switch';

import { FormGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import { FormLabel } from '@mui/material';

export default function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Label placement</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={<Switch color="primary" />}
          label="Top"
          labelPlacement="top"
        />
        <FormControlLabel
          value="start"
          control={<Switch color="primary" />}
          label="Start"
          labelPlacement="start"
        />
        <FormControlLabel
          value="bottom"
          control={<Switch color="primary" />}
          label="Bottom"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="end"
          control={<Switch color="primary" />}
          label="End"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  );
}
