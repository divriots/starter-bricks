import * as React from 'react';
import { Rating } from '~/rating';
import { Stack } from '~/stack';

function RatingSIze_() {
  return (
    <Stack spacing={1}>
      <Rating name="size-small" defaultValue={2} size="small" />
      <Rating name="size-medium" defaultValue={2} />
      <Rating name="size-large" defaultValue={2} size="large" />
    </Stack>
  );
}

export const RatingSIze = () => <RatingSIze_ />;
