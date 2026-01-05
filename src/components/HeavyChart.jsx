// import ExpensiveCalculation from "./ExpensiveCalculation";

import { lazy, Suspense } from "react";

const ExpensiveCalculation = lazy(() => import("./ExpensiveCalculation"));

const HeavyChart = () => {
  return (
    <div>
      <h1>Heavy Chart Component</h1>
      <p>This component simulates a heavy chart rendering process.</p>

      <Suspense fallback={<div>Loading Chart...</div>}>
        <ExpensiveCalculation n={44} />
      </Suspense>
    </div>
  );
};

export default HeavyChart;
