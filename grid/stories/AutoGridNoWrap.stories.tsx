import * as React from 'react';
import { Box } from '~/box';
import { Paper } from '~/paper';
import { Grid } from '~/grid';
import { Avatar } from '~/avatar';
import { Typography } from '~/typography';

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

function AutoGridNoWrap_() {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography noWrap>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export const AutoGridNoWrap = () => <AutoGridNoWrap_ />;
