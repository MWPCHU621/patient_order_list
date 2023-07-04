'use client';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByValue } from "@/redux/features/counterSlice";
import { createPatient } from '@/redux/features/patientListSlice';
import { addOrder, setPatient } from '@/redux/features/patientSlice';
import { setOrder } from '@/redux/features/orderSlice';
import OrderList from './Components/orderList';

//material ui imports
import Button from '@mui/material/Button';

export default function Home() {
  //react hooks to fetch and set information from redux store
  const count = useSelector((state) => state.counter.value);
  const patientList = useSelector((state) => state.patientList.patientList);
  const dispatch = useDispatch();
  const [orderListOpen, setOpen] = useState(false);

  //helper Functions
  const openDialogClick = (patient) => {
    setOpen(true);
    dispatch(setPatient(patient));
  };

  const handleOrderListClose = () => {
    setOpen(false);
  }

  //main Return
  return (
    <main>
      {patientList.map((patient) => (
        <div key={patient._id}>
          <Button onClick={() => openDialogClick(patient)}>
            {patient.name}
          </Button>
          <OrderList 
            open={orderListOpen}
            onClose={handleOrderListClose}
          />
        </div>
      ))}
    </main>
  )

}
