'use client';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setOrder } from '@/redux/features/orderSlice';
import AddOrderForm from './addOrderForm';
import ModifyMessage from './modifyMessage';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { Close } from '@mui/icons-material';

export default function OrderList(props) {
    const dispatch = useDispatch();

    //hooks to fetch data from redux store
    const messageList = useSelector((state) => state.orderList.orderList);
    const orderList = useSelector((state) => state.patient.orderList)
    const patientName = useSelector((state) => state.patient.name);
    
    //parent patient list states
    const { onClose, open } = props;

    //add order dialog open/close state
    const [ addOrderOpen, setAddOrderOpen ] = useState(false);

    //modify message dialog open/close state
    const [ modifyMessageOpen, setModifyMessageOpen ] = useState(false);


    //helper Functions
    const handleOrderListClose = () => { onClose() };

    //add order dialog open/close handler
    const handleAddOrderClose = () => { setAddOrderOpen(false) };
    const openAddOrderDialogClick = () => { setAddOrderOpen(true) };

    //modify message dialog open/close handler
    const handleModifyMessageClose = () => { setModifyMessageOpen(false) };
    const openModifyMessageDialogClick = (order) => { 
        setModifyMessageOpen(true);
        setMessage(order);
    };

    const findMessage = (id) => {
        const order = messageList.find(message => message.id == id);
        return order.message;
    }  

    const setMessage = (order) => { 
        const message = {
            id: order.OrderId,
            message: findMessage(order.OrderId)
        }
        dispatch(setOrder(message));
    };
    
    //Main Return
    return (
      <Dialog onClose={handleOrderListClose} open={open} className="order_list_dialog">
        <Button onClick={onClose}> <CloseIcon/> </Button>
        <DialogTitle>Orders: {patientName} </DialogTitle>
        <Button onClick={openAddOrderDialogClick}> <AddIcon/> </Button>
        <AddOrderForm 
            onClose={handleAddOrderClose}
            open={addOrderOpen} 
        />
        <List sx={{ pt: 0 }}>
          {orderList.map((order) => (
            <div key={order.OrderId}>
                <ListItem disableGutters>
                    <ListItemText>
                        Id: {order.OrderId}
                    </ListItemText>
                    <ListItemText>
                        Message: { findMessage(order.OrderId) }
                    </ListItemText>
                    <Button onClick={() => openModifyMessageDialogClick(order)}> <EditIcon/> </Button>
                    <ModifyMessage onClose={handleModifyMessageClose} open={modifyMessageOpen}/>
                </ListItem>
            </div>
          ))}
        </List>
      </Dialog>
    );
    
}