import { expensiveCalculationFibo } from "../mockData";

const Exp = ({ n }) => {
  return <div>Expensive Calculation Result: {expensiveCalculationFibo(n)}</div>;
};

export default Exp;
