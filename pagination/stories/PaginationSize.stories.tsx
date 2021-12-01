import * as React from 'react';
import { Pagination } from '~/pagination';
import { Stack } from '~/stack';

function PaginationSize_() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} size="small" />
      <Pagination count={10} />
      <Pagination count={10} size="large" />
    </Stack>
  );
}

export const PaginationSize = () => <PaginationSize_ />;
