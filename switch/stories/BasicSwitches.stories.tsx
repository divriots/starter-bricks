import * as React from 'react';
import { Switch } from '~/switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function BasicSwitches_() {
  return (
    <div>
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
      <Switch {...label} disabled />
    </div>
  );
}

export const BasicSwitches = () => <BasicSwitches_ />;
