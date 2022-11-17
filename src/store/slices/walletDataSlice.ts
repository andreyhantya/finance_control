import { createSlice, current } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface IExpense {
    expense: number;
    category: string;
    date: string;
    walletName: string;
}

interface IIncoming {
    sum: number;
    category: string;
    date: Date;
    walletName: string;
}

interface IWallet {
    name: string;
    sum: number;
    expense?: IExpense[];
    incoming?: IIncoming[];
    currency: string;
    date: string;
    id: string;
}

interface IWallets {
    wallets: IWallet[];
}

const initialState: IWallets = {
    wallets: [
        {
            name: 'Test wallet',
            sum: 200,
            currency: 'USD',
            date: JSON.stringify(new Date()),
            id: 'string',
            expense: [],
        },
    ],
};

const walletsSlice = createSlice({
    name: 'wallets',
    initialState,
    reducers: {
        createWallet: (state, action: PayloadAction<IWallet>) => {
            state.wallets.push(action.payload);
        },

        addExpense: (state, action: PayloadAction<IWallet>) => {
            const { walletName, expense } = action.payload;
            console.log('state.wallets', action.payload);

            current(state).wallets.map((elem, idx) => {
                if (elem.name === walletName) {
                    const sum: number = elem.sum - Number(expense);

                    state.wallets[idx].expense.push(action.payload);
                    state.wallets[idx].sum = sum;
                }
            });
        },
    },
});

export const { createWallet, addExpense } = walletsSlice.actions;
export const walletData = (state: IWallets) => state.wallets;
export const walletDataSelector = {
    getWalletData: (state: IWallets) => state,
};

export default walletsSlice;
