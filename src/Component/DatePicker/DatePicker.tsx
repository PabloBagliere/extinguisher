import * as React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { Control, Controller } from 'react-hook-form';

interface props {
  control: Control;
  name: string;
  label: string;
}

const DatePicker: React.FC<props> = ({ control, name, label }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <KeyboardDatePicker
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            format="dd/MM/yyyy"
            id={name}
            label={label}
            margin="normal"
            {...field}
          />
        )}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
