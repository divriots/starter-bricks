import * as React from 'react';
import { Chip } from '~/chip';
import { Stack } from '~/stack';
import { Done as DoneIcon } from '@mui/icons-material';
import { Delete as DeleteIcon } from '@mui/icons-material';

function CustomDeleteIconChips_() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DeleteIcon />}
        variant="outlined"
      />
    </Stack>
  );
}

export const CustomDeleteIconChips = () => <CustomDeleteIconChips_ />;
