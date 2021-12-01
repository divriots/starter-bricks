import * as React from 'react';
import { Switch } from '~/switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function SwitchesSize_() {
  return (
    <div>
      <Switch {...label} defaultChecked size="small" />
      <Switch {...label} defaultChecked />
    </div>
  );
}

export const SwitchesSize = () => <SwitchesSize_ />;
