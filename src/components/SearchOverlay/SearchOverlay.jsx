import React, { useEffect, useRef } from 'react';
import './SearchOverlay.css';

const SearchOverlay = ({ value, onChange, onClear, onClose }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="search-overlay">
      <div className="search-input-container">
        <input
          ref={inputRef} 
          type="text"
          placeholder="Введите название"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="search-input"
          maxLength={120}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
        />
      </div>
      <button className="search-clear" onClick={onClose}>
        &#x2715;
      </button>
    </div>
  );
};

export default SearchOverlay;
