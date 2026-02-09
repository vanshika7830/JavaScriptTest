import { useState } from "react";
import "./App.css";

export default function App() {
  const products = [
    { id: 1, name: "Mobile", price: 15000 },
    { id: 2, name: "Fridge", price: 10000 },
    { id: 3, name: "AC", price: 30000 },
  ];

  // store ids of products in cart
  const [cart, setCart] = useState([]);

  // toggle add/remove
  const handleToggle = (id) => {
    if (cart.includes(id)) {
      setCart(cart.filter((item) => item !== id)); // remove
    } else {
      setCart([...cart, id]); // add
    }
  };

  // total price
  const total = products.reduce((sum, product) => {
    return cart.includes(product.id) ? sum + product.price : sum;
  }, 0);

  return (
    <div className="page">
      <h2 className="title">Product List</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>
                <button
                  className={cart.includes(p.id) ? "btn remove" : "btn add"}
                  onClick={() => handleToggle(p.id)}
                >
                  {cart.includes(p.id) ? "❌ Remove from Cart" : "Add to Cart"}
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total-box">
        <h3>🛒 Total Price: {total}</h3>
      </div>
    </div>
  );
}
