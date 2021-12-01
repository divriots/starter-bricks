import * as React from 'react';
import { Button } from '~/button';
import { Stack } from '~/stack';

function TextButtons_() {
  return (
    <Stack direction="row" spacing={2}>
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
    </Stack>
  );
}

export const TextButtons = () => <TextButtons_ />;
