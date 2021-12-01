import * as React from 'react';
import { Button } from '~/button';
import { ButtonGroup } from '~/button-group';

function BasicButtonGroup_() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  );
}

export const BasicButtonGroup = () => <BasicButtonGroup_ />;
