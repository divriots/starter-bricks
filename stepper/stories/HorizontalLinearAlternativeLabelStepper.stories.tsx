import * as React from 'react';
import { Box } from '~/box';
import { Stepper } from '~/stepper';
import { Step } from '@mui/material';
import { StepLabel } from '@mui/material';

const steps = [
  'Select master blaster campaign settings',
  'Create an ad group',
  'Create an ad',
];

function HorizontalLabelPositionBelowStepper_() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export const HorizontalLabelPositionBelowStepper = () => (
  <HorizontalLabelPositionBelowStepper_ />
);
