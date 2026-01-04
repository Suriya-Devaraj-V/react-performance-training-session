import ExpensiveCalculation from "./ExpensiveCalculation";

const HeavyChart = () => {
  // Simulate a heavy chart rendering

  return (
    <div>
      <h1>Heavy Chart Component</h1>
      <p>This component simulates a heavy chart rendering process.</p>

      <ExpensiveCalculation n={20} />
    </div>
  );
};

export default HeavyChart;
