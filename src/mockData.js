import { v4 as uuidv4 } from "uuid";

export const generateProducts = (productCount) => {
  const categories = [
    "Electroics",
    "Clothing",
    "Books",
    "Home & Kitchen",
    "Sports",
  ];
  const brands = ["BrandA", "BrandB", "BrandC", "BrandD", "BrandE"];

  return Array.from({ length: productCount }, (_, index) => ({
    id: uuidv4(),
    name: `Product ${index + 1}`,
    category: categories[Math.floor(Math.random() * categories.length)],
    description: `This is a description for Product ${index + 1}.`,
    brand: brands[Math.floor(Math.random() * brands.length)],
    price: parseFloat((Math.random() * 10000).toFixed(2)),
    rating: parseFloat((Math.random() * 5).toFixed(1)),
    inStock: Math.random() > 0.3,
    productImage: `https://picsum.photos/200/300?random=${index + 1}`,
  }));
};

export const generateUsers = (userCount) => {
  const fname = ["John", "Jane", "Alice", "Bob", "Charlie"];
  const lname = ["Doe", "Smith", "Johnson", "Brown", "Davis"];

  return Array.from({ length: userCount }, (_, index) => ({
    id: uuidv4(),
    firstName: fname[Math.floor(Math.random() * fname.length)],
    lastName: lname[Math.floor(Math.random() * lname.length)],
    email: `users${index + 1}@example.com`,
    isActive: Math.random() > 0.2,
    city: ["Bangalore", "Mumbai", "Chennai", "New Delhi", "New York"][
      Math.floor(Math.random() * 5)
    ],
  }));
};

export const expensiveCalculationFibo = (n) => {
  if (n <= 1) return n;

  return expensiveCalculationFibo(n - 1) + expensiveCalculationFibo(n - 2);
};
