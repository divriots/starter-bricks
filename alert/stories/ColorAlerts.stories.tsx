import * as React from 'react';
import { Alert } from '~/alert';

function ColorAlerts_() {
  return (
    <Alert severity="success" color="info">
      This is a success alert — check it out!
    </Alert>
  );
}

export const ColorAlerts = () => <ColorAlerts_ />;
