import { useCallback, useMemo, useState } from "react";
import { generateProducts } from "../mockData";
import ProductCard from "./ProductCard";
import "./ProductList.css";

const ProductList = () => {
  const [products] = useState(() => generateProducts(50));
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const categories = [
    "All",
    "Electronics",
    "Clothing",
    "Books",
    "Home & Kitchen",
    "Sports",
  ];

  const addToCart = useCallback((id) => {
    setCartItems((prevItems) => [...prevItems, id]);
  }, []);

  const filteredProducts = useMemo(() => {
    console.log("Filtering and sorting products");
    return products
      .filter(
        (product) =>
          product.category === selectedCategory || selectedCategory === "All"
      )
      .sort((a, b) => {
        switch (sortOption) {
          case "price-asc":
            return a.price - b.price;
          case "price-desc":
            return b.price - a.price;
          case "rating-asc":
            return a.rating - b.rating;
          case "rating-desc":
            return b.rating - a.rating;
          default:
            return 0;
        }
      });
  }, [selectedCategory, sortOption]);

  return (
    <div className="containerr">
      <div>
        <h1>Products Catalog</h1>

        <p>Total Products: {products.length}</p>
        <p>Products in cart: {cartItems.length}</p>

        <div className="filters">
          <div>
            <label htmlFor="category-select">Filter by Category: </label>
            <select
              name="category"
              id="category-select"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="sort-select">Sort by: </label>
            <select
              name="sort"
              id="sort-select"
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating-asc">Rating: Low to High</option>
              <option value="rating-desc">Rating: High to Low</option>
            </select>
          </div>
        </div>
      </div>
      <div className="product-container">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
