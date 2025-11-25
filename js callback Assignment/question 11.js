function processProducts(products) {
  const names = products.map(p => p.name);

  
  products.forEach(({ name, price }) => {
    const message = price > 50 ? `${name} is above $50` : `${name} is below $50`;
    console.log(message);
  });

}

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 }
];

processProducts(products);