import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: '',
    message: ''
}

export const patientSlice = createSlice({
    name: 'patient',
    initialState,
    reducers: {
        
    }
});

export const {  } = patientSlice.actions;
export default patientSlice.reducer;
