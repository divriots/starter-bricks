import * as React from 'react';
import { Box } from '~/box';
import { Stepper } from '~/stepper';
import { Step } from '@mui/material';
import { StepLabel } from '@mui/material';
import { Typography } from '~/typography';

const steps = [
  'Select campaign settings',
  'Create an ad group',
  'Create an ad',
];

function HorizontalStepperWithError_() {
  const isStepFailed = (step: number) => {
    return step === 1;
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={1}>
        {steps.map((label, index) => {
          const labelProps: {
            optional?: React.ReactNode;
            error?: boolean;
          } = {};
          if (isStepFailed(index)) {
            labelProps.optional = (
              <Typography variant="caption" color="error">
                Alert message
              </Typography>
            );
            labelProps.error = true;
          }

          return (
            <Step key={label}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}

export const HorizontalStepperWithError = () => <HorizontalStepperWithError_ />;
