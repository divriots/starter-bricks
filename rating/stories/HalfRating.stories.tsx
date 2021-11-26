import * as React from 'react';
import { Rating } from '~/rating';
import { Stack } from '~/stack';

function HalfRating_() {
  return (
    <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Rating
        name="half-rating-read"
        defaultValue={2.5}
        precision={0.5}
        readOnly
      />
    </Stack>
  );
}

export const HalfRating = () => <HalfRating_ />;
