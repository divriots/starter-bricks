import * as React from 'react';
import { TextField } from '~/text-field';
import AdapterJalali from '@date-io/date-fns-jalali';
import { DatePicker } from '~/date-picker';
import { LocalizationProvider } from '@mui/lab';

function LocalizedDatePicker_() {
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterJalali}>
      <DatePicker
        mask="____/__/__"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export const LocalizedDatePicker = () => <LocalizedDatePicker_ />;
