import * as React from 'react';
import { Box } from '~/box';
import { Button } from '~/button';

function BoxComponent_() {
  return (
    <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
      <Button>Save</Button>
    </Box>
  );
}

export const BoxComponent = () => <BoxComponent_ />;
