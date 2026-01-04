import "./ProductCard.css";

const ProductCard = (props) => {
  const { product, addToCart } = props;

  const handleAddCartClick = () => {
    addToCart(product.id);
  };

  return (
    <div className="product-card">
      <img
        src={product.productImage}
        // width={200}
        // height={300}
        alt={product.name}
      />
      <div className="card-header">
        <h2>{product.name}</h2>
        <p
          className={`product-bread-crumb ${
            product.inStock ? "in-stock" : "out-of-stock"
          }`}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
      </div>
      <p>Price: Rupees {product.price}</p>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Brand: {product.brand}</p>
      <p>Rating: {product.rating} / 5</p>

      <button disabled={!product.inStock} onClick={handleAddCartClick}>
        {product.inStock ? "Add to Cart" : "Unavailable"}
      </button>
    </div>
  );
};

export default ProductCard;
