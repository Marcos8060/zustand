import React from "react";
import useStore from "./zustand-store";

function Counter() {
  const { count,increment,decrement} = useStore();
    return (
      <div className="counter">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    );
  }
  
  export default Counter;