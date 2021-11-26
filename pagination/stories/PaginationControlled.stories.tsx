import * as React from 'react';
import { Typography } from '~/typography';
import { Pagination } from '~/pagination';
import { Stack } from '~/stack';

function PaginationControlled_() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
  );
}

export const PaginationControlled = () => <PaginationControlled_ />;
