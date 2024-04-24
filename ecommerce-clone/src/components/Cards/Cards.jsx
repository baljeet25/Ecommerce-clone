import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';

const Cards = ({ product }) => {
  return (
    
    <div className='product'>
    <Link to={`/product/${product.id}`} className="product-link">
      <img className='product-image' src={product.images[0]} alt={product.title} />
      <div className='product-details'>
        <h3 className='product-title'>{product.title}</h3>
        <p className='product-description'>Description: {product.description}</p>
        <p className='product-price'>Price: {product.price}</p>
        <p className='product-rating'>Rating: {product.rating}</p>
      </div>
      </Link>
    </div>

 
  );
};

export default Cards;