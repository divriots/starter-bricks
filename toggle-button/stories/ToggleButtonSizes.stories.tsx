import * as React from 'react';
import { FormatAlignLeft as FormatAlignLeftIcon } from '@mui/icons-material';
import { FormatAlignCenter as FormatAlignCenterIcon } from '@mui/icons-material';
import { FormatAlignRight as FormatAlignRightIcon } from '@mui/icons-material';
import { FormatAlignJustify as FormatAlignJustifyIcon } from '@mui/icons-material';
import { Box } from '~/box';
import { ToggleButton } from '~/toggle-button';
import { ToggleButtonGroup } from '@mui/material';

function ToggleButtonSizes_() {
  const [alignment, setAlignment] = React.useState('left');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton value="left" key="left">
      <FormatAlignLeftIcon />
    </ToggleButton>,
    <ToggleButton value="center" key="center">
      <FormatAlignCenterIcon />
    </ToggleButton>,
    <ToggleButton value="right" key="right">
      <FormatAlignRightIcon />
    </ToggleButton>,
    <ToggleButton value="justify" key="justify">
      <FormatAlignJustifyIcon />
    </ToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // TODO Replace with Stack
        '& > :not(style) + :not(style)': { mt: 2 },
      }}
    >
      <ToggleButtonGroup size="small" {...control}>
        {children}
      </ToggleButtonGroup>
      <ToggleButtonGroup {...control}>{children}</ToggleButtonGroup>
      <ToggleButtonGroup size="large" {...control}>
        {children}
      </ToggleButtonGroup>
    </Box>
  );
}

export const ToggleButtonSizes = () => <ToggleButtonSizes_ />;
