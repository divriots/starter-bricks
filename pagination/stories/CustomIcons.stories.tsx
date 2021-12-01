import * as React from 'react';
import { Pagination } from '~/pagination';
import { PaginationItem } from '~/pagination';
import { Stack } from '~/stack';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';

function CustomIcons_() {
  return (
    <Stack spacing={2}>
      <Pagination
        count={10}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}

export const CustomIcons = () => <CustomIcons_ />;
