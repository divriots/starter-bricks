import * as React from 'react';
import { Chip } from '~/chip';
import { Stack } from '~/stack';

function ClickableChips_() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Clickable" onClick={handleClick} />
      <Chip label="Clickable" variant="outlined" onClick={handleClick} />
    </Stack>
  );
}

export const ClickableChips = () => <ClickableChips_ />;
