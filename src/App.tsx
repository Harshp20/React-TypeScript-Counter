import "./App.css";
import Counter from "./components/Counter";
import IncrementButton from "./components/IncrementButton";
import DecrementButton from "./components/DecrementButton";
import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(() => 0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <div className="app">
        <DecrementButton decrementCount={decrementCount} />
        <Counter count={count} />
        <IncrementButton incrementCount={incrementCount} />
      </div>
    </>
  );
}

export default App;
