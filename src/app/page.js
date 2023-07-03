'use client';


import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByValue } from "@/redux/features/counterSlice";
import { createPatient } from '@/redux/features/patientListSlice';
import { addOrder } from '@/redux/features/patientSlice';


export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const patientList = useSelector((state) => state.patientList.patientList);
  const dispatch = useDispatch();

  return (
    <main>
      {/* <button onClick={() => dispatch(increment())}>Increment</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByValue(2))}>Increment By 2</button> */}
      {patientList.map((patient) => (
        <div key={patient.id}>
          <span> {patient.name} </span>
        </div>
      ))}
    </main>
  )
}
