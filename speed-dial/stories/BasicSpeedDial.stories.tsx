import * as React from 'react';
import { Box } from '~/box';
import { SpeedDial } from '~/speed-dial';
import { SpeedDialIcon } from '@mui/material';
import { SpeedDialAction } from '@mui/material';
import { FileCopyOutlined as FileCopyIcon } from '@mui/icons-material';
import { Save as SaveIcon } from '@mui/icons-material';
import { Print as PrintIcon } from '@mui/icons-material';
import { Share as ShareIcon } from '@mui/icons-material';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

function BasicSpeedDial_() {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

export const BasicSpeedDial = () => <BasicSpeedDial_ />;
