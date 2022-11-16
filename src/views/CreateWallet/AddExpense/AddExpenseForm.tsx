import React, { useState } from 'react';
import FormButton from '@src/components/Form/Button/FormButton';
import FormSelect from '@src/components/Form/Select/Select';
import FormTextField from '@src/components/Form/TextField/FormTextField';
import { CreateWalletWrapper, FormWrapper } from './StyledAddExpenseForm';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { Formik, Field } from 'formik';
import {
    createWallet,
    walletData,
    walletDataSelector,
    addExpense,
} from '../../../store/slices/walletDataSlice';
import { MenuItem, NativeSelect, InputLabel, FormControl } from '@mui/material';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface IExpense {
    category: string;
    date: Dayjs;
    expense: number;
    walletName: string;
    comment?: string;
}

interface IExpenseData {
    walletName: string;
    expense: number;
    date: Dayjs;
    category: string;
    comment?: string;
}

interface ICategories {
    value: string;
    label: string;
    id: number;
}

const AddExpenseForm = () => {
    const dispatch = useAppDispatch();
    const walletsData = useAppSelector(walletDataSelector.getWalletData);

    const [value, setValue] = React.useState<Dayjs | null>(null);

    const categories: ICategories[] = [
        {
            value: 'goods',
            label: 'goods',
            id: 1,
        },
        {
            value: 'entertainment',
            label: 'entertainment',
            id: 2,
        },
    ];

    const clickButton = () => {};

    const addExpenseInStore = (data: IExpenseData) => {
        console.log('data.walletName', data);

        const { walletName, expense, comment, category } = data;

        const expensToStore: IExpense = {
            walletName: walletName,
            date: value,
            expense: expense,
            comment: comment,
            category: category,
        };

        dispatch(addExpense(expensToStore));
    };

    return (
        <CreateWalletWrapper>
            <FormWrapper>
                <Formik
                    initialValues={{ walletName: '', expense: 0, comment: '', category: '' }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            setSubmitting(false);
                            addExpenseInStore(values);
                        }, 0);
                    }}>
                    {({ handleChange, handleBlur, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <FormControl fullWidth={true}>
                                <Field name="walletName" component={FormSelect}>
                                    {walletsData.wallets.map((elem, idx: number) => (
                                        <MenuItem key={idx} value={elem.name}>
                                            {elem.name}
                                        </MenuItem>
                                    ))}
                                </Field>
                            </FormControl>
                            <FormTextField
                                width="100%"
                                placeholder="Сумма"
                                onChange={handleChange}
                                margin={0}
                                onBlur={handleBlur}
                                id="expense"
                            />
                            <FormControl fullWidth={true}>
                                <Field name="category" id="category" component={FormSelect}>
                                    {categories.map((elem, idx) => (
                                        <MenuItem key={idx} value={elem.value}>
                                            {elem.value}
                                        </MenuItem>
                                    ))}
                                </Field>
                            </FormControl>
                            <FormTextField
                                width="100%"
                                placeholder="Комментарий"
                                onChange={handleChange}
                                margin={0}
                                onBlur={handleBlur}
                                id="comment"
                            />
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Дата"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                            <FormButton
                                type="submit"
                                value="Добавить расход"
                                spacing={3}
                                handlerClick={() => clickButton()}
                            />
                        </form>
                    )}
                </Formik>
            </FormWrapper>
        </CreateWalletWrapper>
    );
};

export default AddExpenseForm;
