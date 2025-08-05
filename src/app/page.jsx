"use client";
import React from "react";
import { productsData } from "../data/products";
import ProductCard from "../components/ProductCard/ProductCard";

export default function Home() {
  return (
    <div className="products" style={{ display: "flex", flexWrap: "wrap" }}>
      {productsData.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
