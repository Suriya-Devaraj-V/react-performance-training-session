import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import Layout from "./components/Layout";
import HeavyChart from "./components/HeavyChart";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/heavy-component" element={<HeavyChart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
