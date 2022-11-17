import React, { useState } from 'react';
import FormButton from '../../components/Form/Button/FormButton';
import FormSelect from '../../components/Form/Select/Select';
import FormTextField from '../../components/Form/TextField/FormTextField';
import { CreateWalletWrapper, FormWrapper } from './StyledCreateWallet';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Formik, Field } from 'formik';
import { createWallet } from '../../store/slices/walletDataSlice';
import { MenuItem, NativeSelect, InputLabel, FormControl } from '@mui/material';
import FieldWrapper from '@src/components/Form/FieldWrapper/FieldWrapper';
import { currencies } from '@src/utils/Helpers/Data';

const CreateWallet = () => {
    const dispatch = useAppDispatch();
    const [walletIdCount, setWalletIdCount] = useState(0);

    const clickButton = () => {};

    const createWallett = (data) => {
        const wallet = {
            name: data.walletName,
            currency: data.currency,
            date: JSON.stringify(new Date()),
            sum: data.walletStartSum,
            id: `wallet-${walletIdCount}`,
        };

        setWalletIdCount(walletIdCount + 1);
        dispatch(createWallet(wallet));
    };

    return (
        <CreateWalletWrapper>
            <h2>Создайте кошелёк</h2>
            <FormWrapper>
                <Formik
                    initialValues={{ walletName: '', currency: 'USD', walletStartSum: 0 }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                            createWallett(values);
                        }, 400);
                    }}>
                    {({ handleChange, handleBlur, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <FormControl fullWidth={true}>
                                <Field name="currency" component={FormSelect}>
                                    {currencies.map((elem) => (
                                        <MenuItem value={elem.value}>{elem.value}</MenuItem>
                                    ))}
                                </Field>
                            </FormControl>
                            <FormTextField
                                width="100%"
                                placeholder="Название кошелька"
                                onChange={handleChange}
                                margin={1}
                                onBlur={handleBlur}
                                id="walletName"
                            />
                            <FormTextField
                                width="100%"
                                margin={0}
                                placeholder="Начальная сумма"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="walletStartSum"
                            />

                            <FormButton
                                type="submit"
                                value="Готово"
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

export default CreateWallet;
