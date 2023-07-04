'use client';

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import patientListReducer from './features/patientListSlice';
import patientReducer from './features/patientSlice';
import orderReducer from './features/orderSlice';
import orderListReducer from './features/orderListSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        patientList: patientListReducer,
        patient: patientReducer,
        orderList: orderListReducer,
        order: orderReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;