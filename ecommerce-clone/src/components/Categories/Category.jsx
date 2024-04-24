// CategoryPage.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cards from "../Cards/Cards";

const Category= () => {
  const { categoryName } = useParams();
  const [categoryData, setCategoryData] = useState();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data); 
        setCategoryData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error); 
      });   
  }, [categoryName]);

  return (
  
    <div className='main-container'>
      <div className="products">
        {categoryData && 
          categoryData.products.map((product, index) => (
            <Cards key={index} product={product}/>
          ))}
      </div>
    </div>
  );
};

export default Category;
