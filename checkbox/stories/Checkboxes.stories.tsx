import * as React from 'react';
import { Checkbox } from '~/checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Checkboxes_() {
  return (
    <div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    </div>
  );
}

export const Checkboxes = () => <Checkboxes_ />;
