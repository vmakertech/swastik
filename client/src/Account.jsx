import React, { useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './action/index'
import ShowBalance from './component/showBalance';

export default function Account() { 
 const count = useSelector(state => state.count)
 const dispatch = useDispatch()
  return (
    <>
      <button onClick={() => {dispatch({type:"INC",e:5})}}>+</button> &ensp;
      <button onClick={() => {dispatch(decrement(5))}}>-</button>
       <ShowBalance />
    </>
  );
}
