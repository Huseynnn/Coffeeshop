import React from "react";
import "./product.css";

const productList = [
  { name: "Espresso", price: "$3", description: "Strong & bold shot of coffee" },
  { name: "Cappuccino", price: "$4", description: "Espresso with foamed milk" },
  { name: "Latte", price: "$4.5", description: "Smooth espresso with steamed milk" },
  { name: "Mocha", price: "$5", description: "Latte with rich chocolate syrup" },
  { name: "Cold Brew", price: "$4", description: "Brewed slow for a smoother taste" },
  { name: "Americano", price: "$3.5", description: "Espresso diluted with hot water" },
  { name: "Macchiato", price: "$4", description: "Espresso topped with milk foam" },
  { name: "Flat White", price: "$4.5", description: "Espresso with microfoam" },
  { name: "Turkish Coffee", price: "$3", description: "Traditional finely ground coffee" },
  { name: "Iced Latte", price: "$4.5", description: "Cold version of classic latte" },
  { name: "Affogato", price: "$5", description: "Vanilla ice cream with espresso" },
];


export default function Products() {
  return (
    <section className="products" id="products">
      <h2>Our Menu</h2>
      <div className="product-grid">
        {productList.map((item, index) => (
          <div className="product-card" key={index}>
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
