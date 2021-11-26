import * as React from 'react';
import { Button } from '~/button';

function DisableElevation_() {
  return (
    <Button variant="contained" disableElevation>
      Disable elevation
    </Button>
  );
}

export const DisableElevation = () => <DisableElevation_ />;
