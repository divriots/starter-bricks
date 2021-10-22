import * as React from 'react';
import { ButtonGroup } from '~/button-group';
import { Button } from '~/button';

export default function DisableElevation() {
  return (
    <ButtonGroup disableElevation variant="contained">
      <Button>One</Button>
      <Button>Two</Button>
    </ButtonGroup>
  );
}
