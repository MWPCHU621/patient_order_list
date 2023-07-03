import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    patientList:[
        {"_id":"1","name":"Jimmy","order":["1","2","3"]},
        {"_id":"2","name":"Sally","order":["6","7"]},
        {"_id":"3","name":"Dale","order":["4","5"]},
        {"_id":"4","name":"Victoria","order":["8","9"]},
        {"_id":"5","name":"Jinny","order":["10","11","12"]}
    ]
}

export const patientListSlice = createSlice({
    name: 'patients',
    initialState,
    reducers: {
        createPatient: (state, actions) => state.patientList.push(actions.payload)
    }
});

export const { createPatient } = patientListSlice.actions;
export default patientListSlice.reducer;
