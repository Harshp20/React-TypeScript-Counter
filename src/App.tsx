import "./App.css";
import Counter from "./components/Counter";
import IncrementButton from "./components/IncrementButton";
import DecrementButton from "./components/DecrementButton";
import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(() => 0);

  return (
    <>
      <div className="app">
        <DecrementButton decrementCount={setCount} />
        <Counter count={count} />
        <IncrementButton incrementCount={setCount} />
      </div>
    </>
  );
}

export default App;
