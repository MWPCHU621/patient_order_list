import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    patientList:[
        {"_id":"1","name":"Jimmy","order":[
            {"OrderId":"1"},
            {"OrderId":"2"},
            {"OrderId":"3"}
        ]},
        {"_id":"2","name":"Sally","order":[
            {"OrderId":"6"},
            {"OrderId":"7"}
        ]},
        {"_id":"3","name":"Dale","order":[
            {"OrderId":"4"},
            {"OrderId":"5"}
        ]},
        {"_id":"4","name":"Victoria","order":[
            {"OrderId":"8"},
            {"OrderId":"9"}
        ]},
        {"_id":"5","name":"Jinny","order":[
            {"OrderId":"10"},
            {"OrderId":"11"},
            {"OrderId":"12"}
        ]}
    ]
}

export const patientListSlice = createSlice({
    name: 'patients',
    initialState,
    reducers: {
        createPatient: (state, actions) => state.patientList.push(actions.payload),
        updatePatient: (state, actions) => {
            const index = state.patientList.findIndex((patient) => patient.name == actions.payload.name);
            state.patientList[index].order.push(actions.payload);
        }
    }
});

export const { createPatient, updatePatient } = patientListSlice.actions;
export default patientListSlice.reducer;
