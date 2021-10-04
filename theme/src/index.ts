import { light, dark } from '~/colors';
import { createTheme as createThemeMui, PaletteMode } from '@mui/material';

export const createTheme = (mode: PaletteMode) =>
  createThemeMui({
    palette: mode === 'light' ? light : dark,
    // roundness,
    // fonts: configureFonts(fontConfig),
    // animation,
  });
