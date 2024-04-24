import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";


const Sidebar = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
debugger;
  return (
    <div className="categories-container">
      <h2>Categories</h2>
      <ul className="categories-list">
        {data &&
          data.map((category, index) => (
            <li key={index} className="category-item">
              <Link to={`/category/${category}`} className="category-link">
                <span className="category-name">{category}</span>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;
