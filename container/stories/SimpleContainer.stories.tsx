import * as React from 'react';
import { CssBaseline } from '@mui/material';
import { Box } from '~/box';
import { Container } from '~/container';

function SimpleContainer_() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}

export const SimpleContainer = () => <SimpleContainer_ />;
