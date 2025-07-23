import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { additem } from '../store/cartSlice';
//import type { RootState } from '.././store/store'; // adjust the import path as needed

const App = () => {
  const cart = useSelector((store) => store.cart.items);
  const dispatch=useDispatch();
  function handleadd(){
    dispatch(additem("grapes"))
  }
  return (
    <div>
      {cart.map((i)=><div>{i}</div>)}
      <button onClick={handleadd}>Add Item</button>
    </div>
  )
}

export default App
