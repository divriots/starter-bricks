import * as React from 'react';
import { FormControl, useFormControl } from '@mui/material';
import { OutlinedInput } from '@mui/material';
import { Box } from '~/box';
import { FormHelperText } from '@mui/material';

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'This field is being focused';
    }

    return 'Helper text';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

function UseFormControl_() {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: '25ch' }}>
        <OutlinedInput placeholder="Please enter text" />
        <MyFormHelperText />
      </FormControl>
    </Box>
  );
}

export const UseFormControl = () => <UseFormControl_ />;
