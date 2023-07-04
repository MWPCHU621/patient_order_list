import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orderList:[
        {"id": "1", "message":"test 1"},
        {"id": "2", "message":"test 2"},
        {"id": "3", "message":"test 3"},
        {"id": "4", "message":"test 4"},
        {"id": "5", "message":"test 5"},
        {"id": "6", "message":"test 6"},
        {"id": "7", "message":"test 7"},
        {"id": "8", "message":"test 8"},
        {"id": "9", "message":"test 9"},
        {"id": "10", "message":"test 10"},
        {"id": "11", "message":"test 11"},
        {"id": "12", "message":"test 12"}
    ]
}

export const orderListSlice = createSlice({
    name: 'orderList',
    initialState,
    reducers: {
        addToOrderList: (state, actions) => { state.orderList.push(actions.payload) },
        modifyOrder: (state, actions) => {
            const modifiedOrderList = state.orderList.with(actions.payload.id - 1, actions.payload);
            state.orderList = modifiedOrderList;
        }
    }
});

export const { addToOrderList, modifyOrder } = orderListSlice.actions;

export default orderListSlice.reducer;
