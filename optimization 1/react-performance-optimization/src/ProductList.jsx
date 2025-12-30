function ProductList({ products, onSelectProduct }) {
  console.log("ProductList rendered");

  return (
    <div>
      <h3>Product List</h3>
      <ul>
        {products.slice(0, 10).map((product) => (
          <li key={product.id}>
            {product.name} - ₹{product.price}
            <button onClick={() => onSelectProduct(product)}>
              Select
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
