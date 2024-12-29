import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }
  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleResetClick() {
    dispatch(reset());
  }

  function handleincrementByAmountClick() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, Redux Toolkit!</p>
        <button onClick={handleIncrementClick}>+</button>
        <p>Count: {count}</p>
        <button onClick={handleDecrementClick}>-</button>
        <button onClick={handleResetClick}>Reset</button>
        <br />
        <input
          type="Number"
          value={amount}
          placeholder="Enter the amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleincrementByAmountClick}>
          Increment by Amount
        </button>
      </header>
    </div>
  );
}

export default App;
