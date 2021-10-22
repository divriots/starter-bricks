/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { Box } from '@mui/material';
import { Link } from '~/link';

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

export default function Links() {
  return (
    <Box
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
      <Link href="#">Link</Link>
      <Link href="#" color="inherit">
        {'color="inherit"'}
      </Link>
      <Link href="#" variant="body2">
        {'variant="body2"'}
      </Link>
    </Box>
  );
}
