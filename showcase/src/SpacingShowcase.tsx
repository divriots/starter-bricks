import * as React from 'react';
import { Space } from '@divriots/dockit-react/space';
import { useTheme } from '@mui/material/styles';

export const SpacingShowcase = () => {
  const theme = useTheme();
  const scale = Array.from({ length: 10 }, (_, i) => theme.spacing(i));
  return <Space scale={scale} />;
};
