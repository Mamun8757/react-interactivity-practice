import { useState } from "react";

export default function UpdaterFunction() {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Count: {count} </h1>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
}
