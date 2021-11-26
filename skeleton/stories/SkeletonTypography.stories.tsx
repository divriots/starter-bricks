import * as React from 'react';
import { Typography } from '~/typography';
import { TypographyProps } from '@mui/material';
import { Skeleton } from '~/skeleton';
import { Grid } from '~/grid';

const variants = [
  'h1',
  'h3',
  'body1',
  'caption',
] as readonly TypographyProps['variant'][];

function TypographyDemo(props: { loading?: boolean }) {
  const { loading = false } = props;

  return (
    <div>
      {variants.map((variant) => (
        <Typography component="div" key={variant} variant={variant}>
          {loading ? <Skeleton /> : variant}
        </Typography>
      ))}
    </div>
  );
}

function SkeletonTypography_() {
  return (
    <Grid container spacing={8}>
      <Grid item xs>
        <TypographyDemo loading />
      </Grid>
      <Grid item xs>
        <TypographyDemo />
      </Grid>
    </Grid>
  );
}

export const SkeletonTypography = () => <SkeletonTypography_ />;
