import * as React from 'react';
import { Pagination } from '~/pagination';
import { Stack } from '~/stack';

function PaginationOutlined_() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} variant="outlined" />
      <Pagination count={10} variant="outlined" color="primary" />
      <Pagination count={10} variant="outlined" color="secondary" />
      <Pagination count={10} variant="outlined" disabled />
    </Stack>
  );
}

export const PaginationOutlined = () => <PaginationOutlined_ />;
