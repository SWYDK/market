import React, { useEffect, useState } from 'react';
import productimg from '../../assets/product.png';
import './Orders.css';

const Orders = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const mockData = [
      {
        id: 1,
        name: 'Футболка In Web3 We Trust',
        photo1: 'http://127.0.0.1:8000/media/product/Image_1.png',
        description: 'Все что вам нужно знать для создания Mini App',
        price: 3000,
        date: '27.07.2025',
        category: 1,
      },
      {
        id: 2,
        name: 'Футболка In Web3 We Trust',
        photo1: 'http://127.0.0.1:8000/media/product/Image_1.png',
        description: 'Повторный товар для примера',
        price: 3000,
        date: '27.07.2025',
        category: 1,
      },
            {
        id: 1,
        name: 'Футболка In Web3 We Trust',
        photo1: 'http://127.0.0.1:8000/media/product/Image_1.png',
        description: 'Все что вам нужно знать для создания Mini App',
        price: 3000,
        date: '27.07.2025',
        category: 1,
      },
      {
        id: 2,
        name: 'Футболка In Web3 We Trust',
        photo1: 'http://127.0.0.1:8000/media/product/Image_1.png',
        description: 'Повторный товар для примера',
        price: 3000,
        date: '27.07.2025',
        category: 1,
      },
            {
        id: 1,
        name: 'Футболка In Web3 We Trust',
        photo1: 'http://127.0.0.1:8000/media/product/Image_1.png',
        description: 'Все что вам нужно знать для создания Mini App',
        price: 3000,
        date: '27.07.2025',
        category: 1,
      },
      {
        id: 2,
        name: 'Футболка In Web3 We Trust',
        photo1: 'http://127.0.0.1:8000/media/product/Image_1.png',
        description: 'Повторный товар для примера',
        price: 3000,
        date: '27.07.2025',
        category: 1,
      },
            {
        id: 1,
        name: 'Футболка In Web3 We Trust',
        photo1: 'http://127.0.0.1:8000/media/product/Image_1.png',
        description: 'Все что вам нужно знать для создания Mini App',
        price: 3000,
        date: '27.07.2025',
        category: 1,
      },
      {
        id: 2,
        name: 'Футболка In Web3 We Trust',
        photo1: 'http://127.0.0.1:8000/media/product/Image_1.png',
        description: 'Повторный товар для примера',
        price: 3000,
        date: '27.07.2025',
        category: 1,
      },
    ];
    setProducts(mockData);
  }, []);

  return (
    <div className="orders-wrapper">
      {products.map((product) => (
        <div className="orders-card" key={product.id}>
          <img src={productimg} alt={product.name} className="orders-image" />
          <div className="orders-info">
            <h3 className="orders-title">{product.name}</h3>
            <p className="orders-price">{product.price}₽</p>
          </div>
          <p className="orders-date">{product.date}</p>

        </div>
      ))}
    </div>
  );
};

export default Orders;
