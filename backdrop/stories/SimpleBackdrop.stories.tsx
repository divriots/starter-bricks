import * as React from 'react';
import { Backdrop } from '~/backdrop';
import { CircularProgress } from '~/progress';
import { Button } from '~/button';

function SimpleBackdrop_() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button onClick={handleToggle}>Show backdrop</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export const SimpleBackdrop = () => <SimpleBackdrop_ />;
