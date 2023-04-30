import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  customDecrement,
  customIncrement,
} from "../../redux/slice/counterSlice";
const Counter = () => {
  const [inputVal, setInputVal] = useState();
  const count = useSelector((state) => state.counterStore.count);
  const dispatch = useDispatch();
  return (
    <div className="container d-flex flex-column justify-content-center">
      <h2 className="text-center">Counter: {count}</h2>
      <div className="d-flex justify-content-between ">
        <div className=" d-flex border p-2 gap-2">
          <button
            className="btn btn-primary"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          &nbsp;
          <button
            className="btn btn-danger"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
        <div className="d-flex  border p-2 gap-2">
          <input
            type="text"
            onChange={(e) => {
              setInputVal(parseInt(e.target.value));
            }}
          />
          <button
            className="btn btn-primary"
            onClick={() => dispatch(customIncrement(inputVal))}
          >
            Increment
          </button>
          &nbsp;
          <button
            className="btn btn-danger"
            onClick={() => dispatch(customDecrement(inputVal))}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
