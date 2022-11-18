import * as yup from 'yup';
import { ONLY_NUMBERS_REG_EXP } from './constants/regex';

export const createWalletSchema = yup.object().shape({
    walletName: yup.string().required('Введите название кошелька'),
    walletStartSum: yup
        .string()
        .matches(ONLY_NUMBERS_REG_EXP, 'Только числа')
        .required('Укажите сумму вашего кошелька'),
});
