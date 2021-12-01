import * as React from 'react';
import { TextField } from '~/text-field';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Stack } from '~/stack';
import { LocalizationProvider } from '@mui/lab';
import { TimePicker } from '~/time-picker';

function FormPropsTimePickers_() {
  const [value, setValue] = React.useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <TimePicker
          label="disabled"
          disabled
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker
          label="read-only"
          readOnly
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}

export const FormPropsTimePickers = () => <FormPropsTimePickers_ />;
