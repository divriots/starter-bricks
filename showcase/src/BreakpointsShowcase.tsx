import * as React from 'react';
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    backgroundColor: theme.palette.secondary.main,
  },
  [theme.breakpoints.up('md')]: {
    backgroundColor: theme.palette.primary.main,
  },
  [theme.breakpoints.up('lg')]: {
    backgroundColor: theme.palette.info.main,
  },
}));

const Text = styled('p')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    color: theme.palette.secondary.contrastText,
  },
  [theme.breakpoints.up('md')]: {
    color: theme.palette.primary.contrastText,
  },
  [theme.breakpoints.up('lg')]: {
    color: theme.palette.info.contrastText,
  },
}));

export const BreakpointsShowcase = () => (
  <Root>
    <Text>{'down(sm): palette.secondary'}</Text>
    <Text>{'up(md): palette.primary'}</Text>
    <Text>{'up(lg): pallete.info'}</Text>
  </Root>
);
