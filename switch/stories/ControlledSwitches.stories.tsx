import * as React from 'react';
import { Switch } from '~/switch';

function ControlledSwitches_() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}

export const ControlledSwitches = () => <ControlledSwitches_ />;
