import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: '',
    message: ''
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setOrder: (state, actions) => {
            state.id = actions.payload.id;
            state.message = actions.payload.message;
        }
    }
});

export const { setOrder } = orderSlice.actions;
export default orderSlice.reducer;
