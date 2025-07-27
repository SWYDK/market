import React, { useState, useEffect } from 'react';
import './ProductModal.css';
import productimg from '../../assets/product2.png';

const ProductModal = ({ product, onClose }) => {
  const [closing, setClosing] = useState(false);
  const tg = window.Telegram.WebApp;
  console.log('InitData:', tg.initData);
  console.log('Parsed InitDataUnsafe:', tg.initDataUnsafe);
  if (!product) return null;

  const handleClose = () => {
    setClosing(true);
  };

  const onAnimationEnd = () => {
    if (closing) {
      onClose();
    }
  };

  // Запретить скролл body, когда модалка открыта
  useEffect(() => {
    // при монтировании модалки
    document.body.style.overflow = 'hidden';

    // при размонтировании (закрытии)
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="product-modal-overlay" onClick={handleClose}>
      <div
        className={`product-modal ${closing ? 'slide-down' : 'slide-up'}`}
        onClick={(e) => e.stopPropagation()}
        onAnimationEnd={onAnimationEnd}
      >
        <img src={productimg} alt={product.name} className="modal-image" />
        <h2 className="modal-title">{product.name}</h2>
        <p className="modal-description">{product.description}</p>
        <button className="add-to-cart-btn" onClick={handleClose}>
          В корзину ({product.price}₽)
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
