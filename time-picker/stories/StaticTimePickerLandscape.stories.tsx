import * as React from 'react';
import { TextField } from '~/text-field';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';
import { StaticTimePicker } from '@mui/lab';

function StaticTimePickerLandscape_() {
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticTimePicker
        ampm
        orientation="landscape"
        openTo="minutes"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export const StaticTimePickerLandscape = () => <StaticTimePickerLandscape_ />;
