import * as React from 'react';
import { Checkbox } from '~/checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function SizeCheckboxes_() {
  return (
    <div>
      <Checkbox {...label} defaultChecked size="small" />
      <Checkbox {...label} defaultChecked />
      <Checkbox
        {...label}
        defaultChecked
        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
      />
    </div>
  );
}

export const SizeCheckboxes = () => <SizeCheckboxes_ />;
