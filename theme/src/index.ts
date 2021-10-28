import { light, dark } from '~/colors';
import { fonts } from '~/fonts';
import { spacing } from '~/spacing';
import { breakpoints } from '~/breakpoints';
import { zIndex } from '~/z-index';
import { createTheme as createThemeMui, PaletteMode } from '@mui/material';

export const createTheme = (mode: PaletteMode) =>
  createThemeMui({
    palette: mode === 'light' ? light : dark,
    typography: fonts,
    spacing,
    breakpoints,
    zIndex,
  });
