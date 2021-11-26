import * as React from 'react';
import { Pagination } from '~/pagination';
import { Stack } from '~/stack';

function PaginationRounded_() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} shape="rounded" />
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
  );
}

export const PaginationRounded = () => <PaginationRounded_ />;
