"use client"
import './styles.css';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Footer from '@/components/footer/page';
import Logo from '@/components/logo/page';
// Interfaz para representar la estructura de los productos
interface Product {
  id: number;
  name: string;
  imageUrl: string;
}

const SellerProfile = () => {
 
  const [userProducts, setUserProducts] = useState<Product[]>([]);

  useEffect(() => {
    
    const fetchUserProducts = async () => {
      try {
       
        const products = await obtenerProductosDelUsuario();
        setUserProducts(products);
      } catch (error) {
        console.error('Error:', error);
      }
    };

   
    fetchUserProducts();
  }, []);

  
  const obtenerProductosDelUsuario = async (): Promise<Product[]> => {

    return [
      { id: 1, name: 'Producto 1', imageUrl: '/ar1.png' },
      { id: 2, name: 'Producto 2', imageUrl: '/ar2.jpeg' },
      { id: 3, name: 'Producto 3', imageUrl: '/ar3.jpeg' },
      { id: 4, name: 'Producto 4', imageUrl: '/ar1.png' },
      { id: 5, name: 'Producto 5', imageUrl: '/ar2.jpeg' },
      { id: 6, name: 'Producto 6', imageUrl: '/ar3.jpeg' },
      { id: 7, name: 'Producto 7', imageUrl: '/ar1.png' },
      { id: 8, name: 'Producto 8', imageUrl: '/ar2.jpeg' },
      { id: 9, name: 'Producto 9', imageUrl: '/ar3.jpeg' },
    ];
  };

  return (<div className='homeTab'>
    <Logo></Logo>
    <div className='profile'>
      <h1 className="sellerName">Seller Name</h1>
      <div className="gallery">
        {userProducts.map((product, index) => (
          
          <div key={index} className="product">
             <Image
          src={product.imageUrl}
          alt={product.name}
          width={200}
          height={200}
        
        />
          
            <p className=' productName'>{product.name}</p>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
    </div>
  );
};

export default SellerProfile;
