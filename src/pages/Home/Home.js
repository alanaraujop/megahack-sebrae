import React from "react";
import Cart from "../../components/features/Cart/Cart";

export default function Home() {
  return (
    <div className="App">
      <Cart products={[]} show={true} />
    </div>
  );
}
