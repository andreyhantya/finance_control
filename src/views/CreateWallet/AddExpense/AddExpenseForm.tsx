import React, { useState } from 'react';
import FormButton from '@src/components/Form/Button/FormButton';
import FormSelect from '@src/components/Form/Select/Select';
import FormTextField from '@src/components/Form/TextField/FormTextField';
import { CreateWalletWrapper, FormWrapper } from './StyledAddExpenseForm';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { Formik, Field } from 'formik';
import { walletDataSelector, addExpense } from '../../../store/slices/walletDataSlice';
import { MenuItem, NativeSelect, InputLabel, FormControl } from '@mui/material';
import { Dayjs } from 'dayjs';
import FieldWrapper from '@src/components/Form/FieldWrapper/FieldWrapper';
import DateField from '@src/components/Form/Date/DateField';
import CustomSelect from '@src/components/Form/Select/Select';
import { categories } from '@src/utils/Helpers/Data';

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

const AddExpenseForm = () => {
    const dispatch = useAppDispatch();
    const walletsData = useAppSelector(walletDataSelector.getWalletData);
    const [dateValue, setDateValue] = React.useState<Dayjs | null>(null);

    const addExpenseInStore = (data: IExpenseData) => {
        const { walletName, expense, comment, category } = data;

        const expensToStore: IExpense = {
            walletName: walletName,
            date: dateValue,
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
                        setSubmitting(false);
                        addExpenseInStore(values);
                    }}>
                    {({ handleChange, handleBlur, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <CustomSelect name="walletName" id="walletName">
                                {walletsData.wallets.map((elem, idx: number) => (
                                    <MenuItem key={idx} value={elem.name}>
                                        {elem.name}
                                    </MenuItem>
                                ))}
                            </CustomSelect>

                            <FormTextField
                                width="100%"
                                placeholder="Сумма"
                                onChange={handleChange}
                                margin={0}
                                onBlur={handleBlur}
                                id="expense"
                            />
                            <CustomSelect name="category" id="category">
                                {categories.map((elem, idx) => (
                                    <MenuItem key={idx} value={elem.value}>
                                        {elem.value}
                                    </MenuItem>
                                ))}
                            </CustomSelect>
                            <FormTextField
                                width="100%"
                                placeholder="Комментарий"
                                onChange={handleChange}
                                margin={0}
                                onBlur={handleBlur}
                                id="comment"
                            />
                            <FieldWrapper>
                                <DateField dateValue={dateValue} setDateValue={setDateValue} />
                            </FieldWrapper>

                            <FormButton type="submit" value="Добавить расход" spacing={3} />
                        </form>
                    )}
                </Formik>
            </FormWrapper>
        </CreateWalletWrapper>
    );
};

export default AddExpenseForm;
