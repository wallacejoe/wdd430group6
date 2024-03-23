"use client"
import './styles.css';
import React, { useState, useEffect } from 'react';

// Interfaz para representar la estructura de los productos
interface Product {
  id: number;
  name: string;
  imageUrl: string;
}

const GalleryPage = () => {
  // Estado para almacenar los productos del usuario
  const [userProducts, setUserProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Supongamos que tienes una función para obtener los productos del usuario actual
    // Esta función debería ser asíncrona y devolver un array de productos
    const fetchUserProducts = async () => {
      try {
        // Llamada a una función ficticia para obtener los productos del usuario actual
        const products = await obtenerProductosDelUsuario();
        setUserProducts(products);
      } catch (error) {
        console.error('Error al obtener los productos del usuario:', error);
      }
    };

    // Llamada a la función para obtener los productos del usuario al cargar la página
    fetchUserProducts();
  }, []);

  // Función ficticia para simular la obtención de productos del usuario actual
  const obtenerProductosDelUsuario = async (): Promise<Product[]> => {
    // Aquí deberías implementar la lógica para obtener los productos del usuario actual
    // Por simplicidad, retornaremos una lista de productos ficticia
    // Podrías obtenerlos de una API, base de datos, etc.
    return [
      { id: 1, name: 'Producto 1', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTgLSjBepGbQsmtmpSrVY7uHAdNs7zz73H7MSeQ8PfdOzy5B5B7BgFcuBq6Y7GYpLK1I&usqp=CAU' },
      { id: 2, name: 'Producto 2', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS53Tmr0WnNn5w_WcLJ_tvr3xJMi-WZ8ySuC-kGHJVB_vcSsY5rppmA8_iwnOFejLKCwl0&usqp=CAU' },
      { id: 3, name: 'Producto 3', imageUrl: 'https://www.silverandearth.com/sites/silverandearth.indiemade.com/files/styles/product_image/public/im1/products/copper_earrings_with_turquoise_tribal_style_3_u.jpg?itok=mKi8eQYE' },
      // Añade más productos según sea necesario
    ];
  };

  return (
    <div className='profile'>
      <h1>Seller Name</h1>
      <div className="gallery">
        {userProducts.map((product, index) => (
          
          <div key={index} className="product">
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
