import React from 'react';
import styles from './ProductPage.module.css'; // Import CSS module
import ProductListing from './ProductListing'; // Import ProductListing component

const ProductPage = () => {
  // Sample categories
  const categories = ['bracelet', 'necklace', 'dreamcatcher'];

  return (
    <main className={styles.productPage}>
      {/* Render carousels for each category */}
      {categories.map((category) => (
        <div key={category}>
          <ProductListing category={category} />
          {/* Button below each carousel */}
          <button className={`${styles.viewMoreButton} ${styles.button}`}>View More {category.charAt(0).toUpperCase() + category.slice(1) + 's'}</button>
        </div>
      ))}
    </main>
  );
};

export default ProductPage;