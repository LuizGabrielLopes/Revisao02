import React from "react";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <div className={styles.productCard} data-category={product.category}>
      <div className={styles.productImage}>
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 4 }}
          />
        ) : (
          <span style={{ fontSize: 48, color: "#ccc" }}>📦</span>
        )}
      </div>
      <div className={styles.productTitle}>{product.title}</div>
      <div className={styles.productPrice}>{product.price}</div>
      <div className={styles.productDescription}>{product.description}</div>
      <div className={styles.productRating}>
        <span className="stars">{"⭐".repeat(product.rating.stars)}</span>
        <span style={{ marginLeft: 8 }}>
          ({product.rating.count}) - {product.rating.reviews} avaliações
        </span>
      </div>
    </div>
  );
}