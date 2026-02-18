function ProductCard({ product }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "20px",
      margin: "10px",
      borderRadius: "8px"
    }}>
      <h3>{product.name}</h3>
      <p>₹ {product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductCard;
