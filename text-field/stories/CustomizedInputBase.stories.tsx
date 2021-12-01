import * as React from 'react';
import { Paper } from '~/paper';
import { InputBase } from '@mui/material';
import { Divider } from '~/divider';
import { IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Search as SearchIcon } from '@mui/icons-material';
import { Directions as DirectionsIcon } from '@mui/icons-material';

function CustomizedInputBase_() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
}

export const CustomizedInputBase = () => <CustomizedInputBase_ />;
