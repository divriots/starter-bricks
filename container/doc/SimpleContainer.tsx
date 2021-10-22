import * as React from 'react';
import { CssBaseline } from '@mui/material';
import { Box } from '~/box';
import { Container } from '~/container';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}
