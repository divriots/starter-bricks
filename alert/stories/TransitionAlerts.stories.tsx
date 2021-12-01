import * as React from 'react';
import { Box } from '~/box';
import { Alert } from '~/alert';
import { IconButton } from '@mui/material';
import { Collapse } from '@mui/material';
import { Button } from '~/button';
import { Close as CloseIcon } from '@mui/icons-material';

function TransitionAlerts_() {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Close me!
        </Alert>
      </Collapse>
      <Button
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Re-open
      </Button>
    </Box>
  );
}

export const TransitionAlerts = () => <TransitionAlerts_ />;
