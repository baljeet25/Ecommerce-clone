import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Cards from '../Cards/Cards';

const SearchProducts = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/category/${searchQuery}`);
        const jsonData = await response.json();
        setSearchResults(jsonData.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  return (
    <div className='main-container'>
      <div className="products">
        {searchResults && searchResults.map((product, index) => (
         <Cards  key={index} product={product}/>
        ))}
      </div>
    </div>
  );
};

export default SearchProducts;
