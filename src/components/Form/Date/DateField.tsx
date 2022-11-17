import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import FieldWrapper from '../FieldWrapper/FieldWrapper';

interface IDateFieldProps {
    dateValue: Dayjs | null;
    setDateValue: (newValue: Dayjs) => void;
}

const DateField = ({ dateValue, setDateValue }: IDateFieldProps) => {
    return (
        <FieldWrapper>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Дата"
                    value={dateValue}
                    onChange={(newValue) => {
                        setDateValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </FieldWrapper>
    );
};

export default DateField;
