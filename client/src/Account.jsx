import React, { useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './action/index'

export default function Account() { 
 const count = useSelector(state => state)
 const dispatch = useDispatch()
  return (
    <>
      <button onClick={() => {dispatch({type:"INC",e:5})}}>+</button> &ensp;
      <button onClick={() => {dispatch(decrement(5))}}>-</button>
      <p>Current Account balance is : {count} </p>
    </>
  );
}
