import * as React from 'react';
import { Pagination } from '~/pagination';
import { Stack } from '~/stack';

function PaginationButtons_() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} showFirstButton showLastButton />
      <Pagination count={10} hidePrevButton hideNextButton />
    </Stack>
  );
}

export const PaginationButtons = () => <PaginationButtons_ />;
