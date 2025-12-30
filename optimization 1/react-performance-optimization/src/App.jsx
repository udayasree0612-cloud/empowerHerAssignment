import { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

const productsData = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 100),
}));

function App() {
  const [counter, setCounter] = useState(0);
  const [products] = useState(productsData);

  // useMemo → prevents recalculation on every render
  const totalPrice = useMemo(() => {
    console.log("Calculating total price");
    return products.reduce((sum, p) => sum + p.price, 0);
  }, [products]);

  // useCallback → prevents function recreation
  const handleProductSelect = useCallback((product) => {
    console.log("Selected:", product.name);
  }, []);

  console.log("App rendered");

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Performance Optimization</h1>

      <h2>Total Price: ₹{totalPrice}</h2>

      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <ProductList
        products={products}
        onSelectProduct={handleProductSelect}
      />
    </div>
  );
}

export default App;
