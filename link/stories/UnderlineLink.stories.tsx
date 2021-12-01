/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { Box } from '~/box';
import { Link } from '~/link';

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

function UnderlineLink_() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
      <Link href="#" underline="none">
        {'underline="none"'}
      </Link>
      <Link href="#" underline="hover">
        {'underline="hover"'}
      </Link>
      <Link href="#" underline="always">
        {'underline="always"'}
      </Link>
    </Box>
  );
}

export const UnderlineLink = () => <UnderlineLink_ />;
