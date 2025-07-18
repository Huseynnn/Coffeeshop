import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">☕ Cozy Coffee</div>
      <nav className="nav-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#products">Menu</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
