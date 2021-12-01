import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';
import { CalendarPicker } from '@mui/lab';
import { MonthPicker } from '@mui/lab';
import { YearPicker } from '@mui/lab';
import { Grid } from '~/grid';

const minDate = new Date('2020-01-01T00:00:00.000');
const maxDate = new Date('2034-01-01T00:00:00.000');

function SubComponentsPickers_() {
  const [date, setDate] = React.useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <CalendarPicker
            date={date}
            onChange={(newDate) => setDate(newDate)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MonthPicker
            date={date}
            minDate={minDate}
            maxDate={maxDate}
            onChange={(newDate) => setDate(newDate)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <YearPicker
            date={date}
            isDateDisabled={() => false}
            minDate={minDate}
            maxDate={maxDate}
            onChange={(newDate) => setDate(newDate)}
          />
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}

export const SubComponentsPickers = () => <SubComponentsPickers_ />;
