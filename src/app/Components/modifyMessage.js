'use Client';

import { useReducer, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePatient } from '@/redux/features/patientListSlice';
import { addOrder } from '@/redux/features/patientSlice';
import { modifyOrder } from '@/redux/features/orderListSlice';

//Material UI Components
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

//Material UI Icons
import CloseIcon from '@mui/icons-material/Close';

export default function ModifyMessage(props) {
    const dispatch = useDispatch();
    const {open, onClose} = props;
    const order = useSelector((state) => state.order);
    const [message, setMessage] = useState(order.message);

    const submitForm = (message) => {

        const newMessage = {
            id:order.id,
            message:message
        }

        dispatch(modifyOrder(newMessage));
        onClose();
    }


    return(
        <Dialog onClose={onClose} open={open}>
            <Button onClick={onClose}> <CloseIcon /> </Button>
            <DialogTitle> Modify Order Message</DialogTitle>
            <FormControl>
                <TextField 
                    label="Message 醫囑"
                    variant="standard"
                    defaultValue={message}
                    onChange={event => setMessage(event.target.value)}
                />
                <Button onClick={() => submitForm(message)}> submit </Button>
            </FormControl>
        </Dialog>
    )
}