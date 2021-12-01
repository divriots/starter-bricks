import * as React from 'react';
import { CircularProgress } from '~/progress';

function CircularUnderLoad_() {
  return <CircularProgress disableShrink />;
}

export const CircularUnderLoad = () => <CircularUnderLoad_ />;
