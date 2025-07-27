import React, { useState } from 'react';
import './Tabs.css';

const categories = ['Мерч', 'Книги', 'Инфопродукты', 'Игрушки'];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Мерч');

  return (
    <div className="tabs-wrapper">
      <div className="tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`tabs-btn ${activeTab === category ? 'active' : ''}`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
