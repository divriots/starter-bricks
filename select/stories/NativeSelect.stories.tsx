import * as React from 'react';
import { Box } from '~/box';
import { InputLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import { NativeSelect } from '@mui/material';

function NativeSelectDemo_() {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Age
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

export const NativeSelectDemo = () => <NativeSelectDemo_ />;
