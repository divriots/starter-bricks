import * as React from 'react';
import { Pagination } from '~/pagination';
import { Stack } from '~/stack';

function BasicPagination_() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} />
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} disabled />
    </Stack>
  );
}

export const BasicPagination = () => <BasicPagination_ />;
