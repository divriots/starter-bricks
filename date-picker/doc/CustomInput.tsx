import * as React from 'react';
import { Box } from '~/box';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';
import { DatePicker as DesktopDatePicker } from '~/date-picker';

export default function CustomInput() {
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="Custom input"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={({ inputRef, inputProps, InputProps }) => (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <input ref={inputRef} {...inputProps} />
            {InputProps?.endAdornment}
          </Box>
        )}
      />
    </LocalizationProvider>
  );
}
