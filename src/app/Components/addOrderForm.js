'use client';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePatient } from '@/redux/features/patientListSlice';
import { addOrder } from '@/redux/features/patientSlice';
import { addToOrderList } from '@/redux/features/orderListSlice';

//Material UI Components
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

//Material UI Icons
import CloseIcon from '@mui/icons-material/Close';

export default function AddOrderForm (props) {
    const dispatch = useDispatch();
    const {open, onClose} = props;
    const [message, setMessage] = useState("");

    const nextId = (useSelector((state) => state.orderList.orderList).length + 1).toString();
    const patient = useSelector((state) => state.patient);

    const submitForm = () => {
        const order = {
            id: nextId,
            message: message
        }
        dispatch(addToOrderList(order));
        dispatch(addOrder({OrderId: nextId}));
        dispatch(updatePatient({name: patient.name, OrderId: nextId}));
        onClose();
    }

    return(
        <Dialog onClose={onClose} open={open}>
            <Button onClick={onClose}> <CloseIcon /> </Button>
            <DialogTitle> Add New Order</DialogTitle>
            <FormControl>
                <TextField 
                    label="Message 醫囑"
                    variant="standard"
                    onChange={event => setMessage(event.target.value)}
                    required
                />
                <Button onClick={() => submitForm()}> submit </Button>
            </FormControl>
        </Dialog>
    )
}