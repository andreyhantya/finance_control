import React from 'react';
import FormButton from '../../components/Form/Button/FormButton';
import FormSelect from '../../components/Form/Select/Select';
import FormTextField from '../../components/Form/TextField/FormTextField';
import { CreateWalletWrapper, StyledForm } from './StyledCreateWallet';
import { Formik } from 'formik';

const CreateWallet = () => {
    const currencies = [
        {
            value: 'USD',
            label: 'USD',
            id: 1,
        },
        {
            value: 'EUR',
            label: 'EUR',
            id: 2,
        },
    ];

    const clickButton = () => {
        console.log(123123);
    };

    return (
        <CreateWalletWrapper>
            <h2>Создайте кошелёк</h2>
            <StyledForm>
                <FormSelect selectItemsData={currencies} label="Валюта" />
            </StyledForm>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <FormTextField
                            placeholder="Текст"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            id="text-input"
                        />

                        {errors.email && touched.email && errors.email}
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {errors.password && touched.password && errors.password}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                        <FormButton
                            type="submit"
                            value="Готово"
                            handlerClick={() => clickButton()}
                        />
                    </form>
                )}
            </Formik>
        </CreateWalletWrapper>
    );
};

export default CreateWallet;
