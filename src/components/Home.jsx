import { useCallback, useEffect, useMemo, useState } from "react";
import Child from "./Child";

const Home = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const someValue = useMemo(() => {
    console.log("Calculating someValue");
    return count * 2;
  }, [count]);

  const handleCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleCount_dec = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  return (
    <div>
      <h1>Welcome to the Performance Demo Home Page!</h1>

      <p>Some Value {someValue}</p>

      <p>Count : {count}</p>

      <p>Toggle : {toggle.toString()}</p>
      <button onClick={() => setToggle((prev) => !prev)}>Toggle</button>

      <p>useMemo</p>

      <p>useCallback</p>

      <Child handleCount={handleCount} handleCount_dec={handleCount_dec} />
    </div>
  );
};

export default Home;
