import React, { useEffect, useState } from 'react';
import productimg from '../../assets/product.png';
import ProductModal from '../ProductModal/ProductModal';
import './Product.css';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);



  useEffect(() => {
    const mockData = [
      {
        id: 1,
        name: 'Футболка In Web3 We Trust',
        photo1: 'http://127.0.0.1:8000/media/product/Image_1.png',
        description: 'Все что вам нужно знать для создания Mini App: монетизация, продвижение, тренды, ошибки и прочее',
        price: 3000,
        category: 1,
      },
      {
        id: 2,
        name: 'Футболка In Web3 We Trust',
        photo1: 'http://127.0.0.1:8000/media/product/Image_1.png',
        description: 'Все что вам нужно знать для создания Mini App: монетизация, продвижение, тренды, ошибки и прочее',
        price: 3000,
        category: 1,
      },
            {
        id: 1,
        name: 'Футболка In Web3 We Trust',
        photo1: 'http://127.0.0.1:8000/media/product/Image_1.png',
        description: 'Все что вам нужно знать для создания Mini App: монетизация, продвижение, тренды, ошибки и прочее',
        price: 3000,
        category: 1,
      },
      {
        id: 2,
        name: 'Футболка In Web3 We Trust',
        photo1: 'http://127.0.0.1:8000/media/product/Image_1.png',
        description: 'Все что вам нужно знать для создания Mini App: монетизация, продвижение, тренды, ошибки и прочее',
        price: 3000,
        category: 1,
      },
            {
        id: 1,
        name: 'Футболка In Web3 We Trust',
        photo1: 'http://127.0.0.1:8000/media/product/Image_1.png',
        description: 'Все что вам нужно знать для создания Mini App: монетизация, продвижение, тренды, ошибки и прочее',
        price: 3000,
        category: 1,
      },
      {
        id: 2,
        name: 'Футболка In Web3 We Trust',
        photo1: 'http://127.0.0.1:8000/media/product/Image_1.png',
        description: 'Все что вам нужно знать для создания Mini App: монетизация, продвижение, тренды, ошибки и прочее',
        price: 3000,
        category: 1,
      },
            {
        id: 1,
        name: 'Футболка In Web3 We Trust',
        photo1: 'http://127.0.0.1:8000/media/product/Image_1.png',
        description: 'Все что вам нужно знать для создания Mini App: монетизация, продвижение, тренды, ошибки и прочее',
        price: 3000,
        category: 1,
      },
      {
        id: 2,
        name: 'Футболка In Web3 We Trust',
        photo1: 'http://127.0.0.1:8000/media/product/Image_1.png',
        description: 'Все что вам нужно знать для создания Mini App: монетизация, продвижение, тренды, ошибки и прочее',
        price: 3000,
        category: 1,
      },
    ];
    setProducts(mockData);
  }, []);

  return (
    <>
    <div className="catalog-wrapper">
      {products.map((product) => (
        <div className="catalog-card" key={product.id} onClick={() => setSelectedProduct(product)}>
          <img src={productimg} alt={product.name} className="catalog-image" />
          <div className="catalog-info">
            <h3 className="catalog-title">{product.name}</h3>
            <p className="catalog-price">{product.price}₽</p>
          </div>
        </div>
      ))}
    </div>
    {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default Product;
