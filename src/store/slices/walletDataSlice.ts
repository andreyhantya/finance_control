import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface IExpense {
    sum: number;
    category: string;
    date: Date;
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
    sum: nustring;
    expence?: IExpense[];
    incoming?: IIncoming[];
    currency: string;
    date: Date;
    id: string;
}

interface IWallets {
    wallets: IWallet[];
}

const initialState: IWallets = {
    wallets: [
        {
            name: 'My wallet',
            sum: 0,
            currency: 'USD',
            date: new Date(),
            id: 'string',
        },
    ],
};

export const walletsSlice = createSlice({
    name: 'walles',
    initialState,
    reducers: {
        createWallet: (state, action: PayloadAction<number>) => {
            state.wallets.push(action.payload);
            console.log(state);
        },
    },
});

export const { createWallet } = walletsSlice.actions;
export const walletData = (state: IWallets) => state.wallets;
console.log('walletData', walletData);

export default walletsSlice.reducer;
