import React from "react";

function HeavyComponent() {
  console.log("🔥 Heavy Component Rendered");

  // Simulate heavy computation
  let total = 0;
  for (let i = 0; i < 1_000_000_000; i++) {
    total += i;
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Heavy Component</h3>
      <p>This component is expensive to render.</p>
    </div>
  );
}

// Prevent re-render if props don’t change
export default React.memo(HeavyComponent);
