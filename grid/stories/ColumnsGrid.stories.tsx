import * as React from 'react';
import { styled } from '@mui/material';
import { Box } from '~/box';
import { Paper } from '~/paper';
import { Grid } from '~/grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ColumnsGrid_() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export const ColumnsGrid = () => <ColumnsGrid_ />;
