import { memo } from "react";

const Child = ({ handleCount, handleCount_dec }) => {
  console.log("Child component rendered");

  return (
    <div>
      <h2>Child component</h2>
      <button onClick={handleCount}>Increment Count from Child</button>
      <button onClick={handleCount_dec}>Decrement Count from Child</button>
    </div>
  );
};

export default memo(Child);
