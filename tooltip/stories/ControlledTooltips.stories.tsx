import * as React from 'react';
import { Button } from '~/button';
import { Tooltip } from '~/tooltip';

function ControlledTooltips_() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Tooltip open={open} onClose={handleClose} onOpen={handleOpen} title="Add">
      <Button>Controlled</Button>
    </Tooltip>
  );
}

export const ControlledTooltips = () => <ControlledTooltips_ />;
