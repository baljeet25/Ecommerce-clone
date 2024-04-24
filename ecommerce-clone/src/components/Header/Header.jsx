import React, { useState, useEffect} from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom'; 
import "./Header.css"
import Ecomartlogo from '../../assets/Eco__1_-removebg-preview.png'
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
debugger
const Header = () => {
  const [query, setQuery] = useState(null);
  const [cartItemCount, setCartItemCount] = useState(0);

  const navigate = useNavigate(); 
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${query}`); 
  };

  useEffect(() => {
    
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
 
    setCartItemCount(cartItems.length);
  }, []);

  return (
    <>
      <header className="header">
        <nav className="nav-container">
          <NavLink to="/" className="nav__logo">
            <img src={Ecomartlogo} alt="Logo" />
          </NavLink>

          <div className= "nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="home" className="nav__link" >
                  HOME
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="product" className="nav__link">
                  PRODUCT
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="about" className="nav__link">
                  ABOUT
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="contact" className="nav__link">
                  CONTACT
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="offer" className="nav__link">
                  OFFER
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="container-fluid">
            <form className="d-flex" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            
          </div>

          <div className="icons">
          <Link to='/login' className='icon-link'>
            <AiOutlineUser className="icon" />
            </Link>
            <AiOutlineHeart className="icon" />
            <Link to="/cart" className='icon-link' >
              <HiOutlineShoppingBag className="icon" />
              {cartItemCount > 0 && (
                <span className="cart-item-count">{cartItemCount}</span>
              )}

            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
