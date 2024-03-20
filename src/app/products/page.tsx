import ProductPage from '../ui/products/ProductPage';
import styles from './page.module.css'; // Import CSS module for styling


export default function ProductPageWrapper() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Product Page</h1>
      <div className={styles.productPage}>
        <ProductPage /> {/* Render the ProductPage component */}
      </div>
    </div>
  );
}