import React, { useEffect, useState } from 'react';
import { FaRupeeSign } from 'react-icons/fa';
import './Carts.css';
import { Link } from 'react-router-dom';
import CategoryPage from '../Categories/Category';
import Category from '../Categories/Category';

debugger
const Carts = () => {
  const [cartItems, setCartItems] = useState([]);
  const [price, setPrice] = useState(0);
  

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
    calculateTotalPrice(storedCartItems);
  }, []);

  const calculateTotalPrice = (items) => {
    const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);
    setPrice(totalPrice);
  };

  const handleChange = (itemId, type) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        if (type === 'increase') {
          item.quantity += 1;
        } else if (type === 'decrease' && item.quantity > 1) {
          item.quantity -= 1;
        }
      }
      return item;
    });
    setCartItems(updatedCartItems);
    calculateTotalPrice(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const handleRemove = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
    calculateTotalPrice(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

 

  return (
    <article>
      {cartItems?.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
          <img src={item.image} />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item.id, 'increase')}> + </button>
            <button>{item.quantity}</button>
            <button onClick={() => handleChange(item.id, 'decrease')}> - </button>
          </div>
          <div>
            <span><FaRupeeSign />{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className='total'>
        <span>Total Amount</span>
        <span><FaRupeeSign />{price}</span>
      </div>


      <div className='order-place'>
      
     <Link to ='/address'>
<button className='order-button'>Place Order</button>
</Link>
</div>

    </article>
  );
}

export default Carts;
