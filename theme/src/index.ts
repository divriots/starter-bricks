import { light, dark } from '~/colors';
import { fonts } from '~/fonts';
import { createTheme as createThemeMui, PaletteMode } from '@mui/material';

export const createTheme = (mode: PaletteMode) =>
  createThemeMui({
    palette: mode === 'light' ? light : dark,
    typography: fonts,
  });
