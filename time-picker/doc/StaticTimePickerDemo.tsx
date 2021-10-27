import * as React from 'react';
import { TextField } from '~/text-field';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';
import { StaticTimePicker } from '@mui/lab';

export default function StaticTimePickerDemo() {
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticTimePicker
        displayStaticWrapperAs="mobile"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
