import * as React from 'react';
import { Button } from '~/button';

import { ButtonGroup } from '~/button-group';

export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  );
}
