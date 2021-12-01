import * as React from 'react';
import { styled } from '@mui/material';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

function TypographyTheme_() {
  return <Div>{"This div's text looks like that of a button."}</Div>;
}

export const TypographyTheme = () => <TypographyTheme_ />;
