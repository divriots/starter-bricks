import { PaletteMode } from '@mui/material';

export const light = {
  mode: 'light' as PaletteMode,
  action: {
    activatedOpacity: 0.12,
    active: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    focus: 'rgba(0, 0, 0, 0.12)',
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
  },
  background: {
    default: '#fff',
    paper: '#fff',
  },
  divider: '#E5E8EC',
  info: {
    contrastText: '#fff',
    dark: '#01579b',
    light: '#03a9f4',
    main: '#0288d1',
  },
  primary: {
    contrastText: '#fff',
    main: '#007FFF',
  },
  secondary: {
    contrastText: '#fff',
    dark: '#7b1fa2',
    light: '#ba68c8',
    main: '#9c27b0',
  },
  success: {
    contrastText: '#fff',
    main: '#1AA251',
  },
  text: {
    disabled: 'rgba(0, 0, 0, 0.38)',
    primary: '#20262D',
    secondary: '#2F3A45',
  },
};

export const dark = {
  mode: 'dark' as PaletteMode,
  action: {
    activatedOpacity: 0.24,
    active: '#fff',
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    focus: 'rgba(255, 255, 255, 0.12)',
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
  },
  background: {
    default: '#001E3C',
    paper: '#0A1929',
  },
  divider: '#132F4C',
  info: {
    contrastText: 'rgba(0, 0, 0, 0.87)',
    dark: '#0288d1',
    light: '#4fc3f7',
    main: '#29b6f6',
  },
  primary: {
    contrastText: 'rgba(0, 0, 0, 0.87)',
    main: '#3399FF',
  },
  secondary: {
    contrastText: 'rgba(0, 0, 0, 0.87)',
    dark: '#ab47bc',
    light: '#f3e5f5',
    main: '#ce93d8',
  },
  success: {
    contrastText: 'rgba(0, 0, 0, 0.87)',
    main: '#1DB45A',
  },
  text: {
    disabled: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)',
    primary: '#fff',
    secondary: '#AAB4BE',
  },
};
