// ProductListing.tsx
import React from 'react';
import styles from './ProductListing.module.css';

interface ProductListingProps {
    category: string;
}

const ProductListing: React.FC<ProductListingProps> = ({ category }) => {
    // Sample products data
    const products = [
        { id: 1, name: 'Handcrafted Bracelet 1', category: 'bracelet', price: 15.99, description: 'Beautifully handcrafted bracelet with intricate designs.' },
        { id: 2, name: 'Handcrafted Bracelet 2', category: 'bracelet', price: 19.99, description: 'Elegant bracelet made with high-quality materials.' },
        { id: 3, name: 'Handcrafted Bracelet 3', category: 'bracelet', price: 12.99, description: 'Unique bracelet with a modern twist.' },
        { id: 4, name: 'Handcrafted Bracelet 4', category: 'bracelet', price: 17.99, description: 'Stylish bracelet perfect for everyday wear.' },
        { id: 5, name: 'Artisan Necklace 1', category: 'necklace', price: 29.99, description: 'Exquisite necklace handcrafted by skilled artisans.' },
        { id: 6, name: 'Artisan Necklace 2', category: 'necklace', price: 24.99, description: 'Beautiful necklace adorned with precious stones.' },
        { id: 7, name: 'Artisan Necklace 3', category: 'necklace', price: 27.99, description: 'Unique necklace that complements any outfit.' },
        { id: 8, name: 'Artisan Necklace 4', category: 'necklace', price: 32.99, description: 'Elegant necklace that makes a statement.' },
        { id: 9, name: 'Dreamcatcher 1', category: 'dreamcatcher', price: 39.99, description: 'Intricate dreamcatcher handcrafted with care.' },
        { id: 10, name: 'Dreamcatcher 2', category: 'dreamcatcher', price: 34.99, description: 'Beautiful dreamcatcher to bring positive vibes.' },
        { id: 11, name: 'Dreamcatcher 3', category: 'dreamcatcher', price: 37.99, description: 'Unique dreamcatcher design for peaceful sleep.' },
        { id: 12, name: 'Dreamcatcher 4', category: 'dreamcatcher', price: 42.99, description: 'Stylish dreamcatcher to hang in any room.' },
    ];

    // Filter products based on the category
    const filteredProducts = products.filter((product) => product.category === category);

    return (
        <div className={styles.productListing}>
            {/* Category title */}
            <h2 className={styles.productTitle}>{category.charAt(0).toUpperCase() + category.slice(1) + 's'}</h2>
            {/* Render products horizontally */}
            <div className={styles.productContainer}>
                {products
                    // Filter products by category and limit to three
                    .filter((product) => product.category === category)
                    .slice(0, 3) // Limit to three products per category
                    .map((product) => (
                        <div key={product.id} className={styles.product}>
                            <h3>{product.name}</h3>
                            <p>Price: ${product.price.toFixed(2)}</p>
                            <p>{product.description}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ProductListing;