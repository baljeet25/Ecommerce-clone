import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaRupeeSign, FaMinus, FaPlus, FaStar,FaStarHalfAlt } from 'react-icons/fa'; // Import necessary icons
import './Productsdetails.css';
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Productdetails = () => {
    const { id } = useParams();
    const [productData, setProductData] = useState(null);
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
          .then((res) => res.json())
          .then((data) => {
            console.log("Fetched data:", data); 
            setProductData(data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error); 
          });   
      }, [id]);

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleAddToCart = () => {
       
        if (productData) {
            const cartItem = {
                id: productData.id,
                image: productData.images[0],
                title: productData.title,
                 price: productData.price,
                quantity: quantity,
                total:quantity*productData.price
            };

            const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            const updatedCartItems = [...existingCartItems, cartItem];
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

       
            toast.success('Item added to bag! ')          
            
        }
    };

    const renderStars = (rating) => {
        const starIcons = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            starIcons.push(<FaStar key={i} />);
        }

        if (hasHalfStar) {
            starIcons.push(<FaStarHalfAlt key="half" />);
        }

        return starIcons;
    };


    return (
       
        <div className="product-details-container">
        
        <ToastContainer autoClose={3000} />

            {productData ? (    
                <div className='product-container'>
                    <div className='product-image'>
                        <img src={productData.images[0]} alt={productData.title} />
                    </div>
                    <div className='product-info'>
                        <h2>{productData.title}</h2>
                        <p>{productData.description}</p>
                        <p className='product-price'><FaRupeeSign />{productData.price}</p>
                        <div className='product-rating'>
                            {renderStars(productData.rating)}
                        </div>

                        <div>
                        <h6>Hurry only few Product Left </h6>
                        <p className='product-stock'>{productData.stock}</p>
                        </div>
                        <div className='quantity-controls'>
                            <button onClick={handleDecreaseQuantity}><FaMinus /></button>
                            <span>{quantity}</span>
                            <button onClick={handleIncreaseQuantity}><FaPlus /></button>
                        </div>
                        <button onClick={handleAddToCart} className='add-to-cart-btn'>Add to Bag</button>
                    </div>
                </div> 
            ) : (
                <p>Loading...</p> 
            )}
        </div>
    );
}

export default Productdetails;
