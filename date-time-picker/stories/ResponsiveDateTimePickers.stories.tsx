import * as React from 'react';
import { TextField } from '~/text-field';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';
import { DateTimePicker } from '~/date-time-picker';
import { MobileDateTimePicker } from '~/date-time-picker';
import { DesktopDateTimePicker } from '~/date-time-picker';
import { Stack } from '~/stack';

function ResponsiveDateTimePickers_() {
  const [value, setValue] = React.useState<Date | null>(
    new Date('2018-01-01T00:00:00.000Z')
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <MobileDateTimePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <DesktopDateTimePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <DateTimePicker
          renderInput={(params) => <TextField {...params} />}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </Stack>
    </LocalizationProvider>
  );
}

export const ResponsiveDateTimePickers = () => <ResponsiveDateTimePickers_ />;
