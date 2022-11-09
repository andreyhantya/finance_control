import {configureStore} from '@reduxjs/toolkit'
import  walletDataSlice  from './slices/walletDataSlice';

export const store = configureStore({
    reducer: {
        createWallet: walletDataSlice

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;