import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: '',
    name: '',
    orderList: []
}

export const patientSlice = createSlice({
    name: 'patient',
    initialState,
    reducers: {
        addOrder: (state, actions) => { state.orderList.push(actions.payload) }
    }
});

export const { addOrder } = patientSlice.actions;
export default patientSlice.reducer;
