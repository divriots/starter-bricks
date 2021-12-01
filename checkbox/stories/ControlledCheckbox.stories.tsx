import * as React from 'react';
import { Checkbox } from '~/checkbox';

function ControlledCheckbox_() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}

export const ControlledCheckbox = () => <ControlledCheckbox_ />;
