import * as React from 'react';
import { FormLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import { FormGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { FormHelperText } from '@mui/material';
import { Switch } from '~/switch';

function SwitchesGroup_() {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <FormControl component="fieldset" variant="standard">
      <FormLabel component="legend">Assign responsibility</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={state.gilad}
              onChange={handleChange}
              name="gilad"
            />
          }
          label="Gilad Gray"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.jason}
              onChange={handleChange}
              name="jason"
            />
          }
          label="Jason Killian"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.antoine}
              onChange={handleChange}
              name="antoine"
            />
          }
          label="Antoine Llorca"
        />
      </FormGroup>
      <FormHelperText>Be careful</FormHelperText>
    </FormControl>
  );
}

export const SwitchesGroup = () => <SwitchesGroup_ />;
