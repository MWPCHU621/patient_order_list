import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: '',
    name: '',
    orderList: [
    ]
}

export const patientSlice = createSlice({
    name: 'patient',
    initialState,
    reducers: {
        addOrder: (state, actions) => { state.orderList.push(actions.payload) },
        setPatient: (state, actions) => {
            state.id = actions.payload.id;
            state.name = actions.payload.name;
            state.orderList = actions.payload.order;
        }
    }
});

export const { addOrder, setPatient } = patientSlice.actions;
export default patientSlice.reducer;
