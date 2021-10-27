import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';
import { ClockPicker } from '@mui/lab';

export default function SubComponentsTimePickers() {
  const [date, setDate] = React.useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ClockPicker date={date} onChange={(newDate) => setDate(newDate)} />
    </LocalizationProvider>
  );
}
