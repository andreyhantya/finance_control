import React, { useState } from 'react';
import FormButton from '../../components/Form/Button/FormButton';
import FormTextField from '../../components/Form/TextField/FormTextField';
import { CreateWalletWrapper, FormWrapper } from './StyledCreateWallet';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Formik, Field } from 'formik';
import { createWallet, walletDataSelector } from '../../store/slices/walletDataSlice';
import { MenuItem, NativeSelect, InputLabel, FormControl } from '@mui/material';
import { currencies } from '@src/utils/Helpers/Data';
import CustomSelect from '../../components/Form/Select/Select';
import { createWalletSchema } from '@src/utils/Helpers/validationSchemas';

interface ICreateWalletProps {
    walletName: string;
    currency: string;
    walletStartSum: string;
}

const CreateWallet = () => {
    const dispatch = useAppDispatch();
    const { wallets } = useAppSelector(walletDataSelector.getWalletData);
    console.log('🚀 ~ file: CreateWallet.tsx ~ line 15 ~ CreateWal ~ wallets', wallets);

    const [walletIdCount, setWalletIdCount] = useState(0);

    const clickButton = () => {};

    const checkWalletName = (newWalletName: string) => {
        return wallets.some((elem) => elem.name === newWalletName);
    };

    const createWallett = (data: ICreateWalletProps) => {
        console.log('🚀 ~ file: CreateWallet.tsx ~ line 27 ~ createWallett ~ data', data);
        const isDoplicateName = checkWalletName(data.walletName);
        if (isDoplicateName) {
            return alert('Такое имя кошелька уже существует, придумайте другое');
        }

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
                    initialValues={{ walletName: '', currency: 'USD', walletStartSum: '' }}
                    validateOnBlur={true}
                    validationSchema={createWalletSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(false);
                        createWallett(values);
                    }}>
                    {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <CustomSelect name="currency" id="currency">
                                {currencies.map((elem) => (
                                    <MenuItem value={elem.value}>{elem.value}</MenuItem>
                                ))}
                            </CustomSelect>
                            <FormTextField
                                errorData={touched.walletName && errors.walletName}
                                width="100%"
                                placeholder="Название кошелька"
                                onChange={handleChange}
                                handleBlur={handleBlur}
                                id="walletName"
                                name="walletName"
                            />
                            <FormTextField
                                errorData={touched.walletStartSum && errors.walletStartSum}
                                width="100%"
                                placeholder="Начальная сумма"
                                onChange={handleChange}
                                handleBlur={handleBlur}
                                id="walletStartSum"
                                name="walletStartSum"
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
