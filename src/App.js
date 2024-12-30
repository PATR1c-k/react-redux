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
import { Button, TextField } from "@mui/material";

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
        <Button variant="outlined" onClick={handleIncrementClick}>
          +
        </Button>
        <p>Count: {count}</p>
        <Button varient="outlined" onClick={handleDecrementClick}>
          -
        </Button>
        <Button varient="outlined" onClick={handleResetClick}>
          Reset
        </Button>
        <br />
        <TextField
          variant="standard"
          type="Number"
          value={amount}
          label="Amount to increment by"
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button varient="outlined" onClick={handleincrementByAmountClick}>
          Increment by Amount
        </Button>
      </header>
    </div>
  );
}

export default App;
