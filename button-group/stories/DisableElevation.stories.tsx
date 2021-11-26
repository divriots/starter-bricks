import * as React from 'react';
import { ButtonGroup } from '~/button-group';
import { Button } from '~/button';

function DisableElevation_() {
  return (
    <ButtonGroup disableElevation variant="contained">
      <Button>One</Button>
      <Button>Two</Button>
    </ButtonGroup>
  );
}

export const DisableElevation = () => <DisableElevation_ />;
