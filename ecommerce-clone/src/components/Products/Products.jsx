import { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import './Products.css'
import Sidebar from "../Sidebar/Sidebar";


const Products = () => {
const [data, setData] = useState(null);

 
useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
 }, [data]);


return (
    <>
    <div style={{display: 'flex'}}>
    <Sidebar/>
    <div style={{ flex: 6 }}>
    <div className='main-container'>
    <div className="products">
    {data && 
        data.products.map((product, index) => (
       <Cards  key={index} product={product}/>
    ))}
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Products