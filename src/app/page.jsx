"use client";
import React from "react";
import { productsData } from "../data/products";
import ProductCard from "../components/ProductCard/ProductCard";

export default function Home() {
  return (
    <div 
      className="products" 
      style={{ 
        display: "flex", 
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "stretch",
        gap: "16px",
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}
    >
      {productsData.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
