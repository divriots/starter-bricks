import * as React from 'react';
import { CssBaseline } from '@mui/material';
import { Box } from '~/box';
import { Container } from '~/container';

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}
