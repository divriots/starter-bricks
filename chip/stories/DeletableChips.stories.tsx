import * as React from 'react';
import { Chip } from '~/chip';
import { Stack } from '~/stack';

function DeletableChips_() {
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Deletable" onDelete={handleDelete} />
      <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
    </Stack>
  );
}

export const DeletableChips = () => <DeletableChips_ />;
