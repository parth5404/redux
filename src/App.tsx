import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { additem, addeditem } from "../store/cartSlice";

const App = () => {
  const cart = useSelector((store) => store.cart.items);
  const added = useSelector((store) => store.cart.added);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAndAddItems = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();

      dispatch(additem(data));
    };

    fetchAndAddItems();
  }, [dispatch]);
  function handleAdd(prop) {
    dispatch(addeditem(prop));
  }
  return (
    <div className="flex">
      {cart.map((i, idx) => (
        <div key={idx}>
          {i.title}
          <button onClick={() => handleAdd(i.title)}>Add</button>
        </div>
      ))}
      Added
      {added.map((i, idx) => (
        <div key={idx}>{i}</div>
      ))}
    </div>
  );
};

export default App;
