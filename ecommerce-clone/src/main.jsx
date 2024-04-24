import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Category from './components/Categories/Category.jsx'
import SearchProducts from './components/SearchProducts/Searchproducts.jsx'
import Productdetails from './components/Productsdetails/Productdetails.jsx'
import Carts from './components/Carts/Carts.jsx'
import Address from './components/Address/Address.jsx'
import Products from './components/Products/Products.jsx'

debugger


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='home' element={<Home/>}/>
    <Route path='product' element={<Products/>}/>
    <Route path="/category/:categoryName" element={<Category/>} />
    <Route exact path="/search" element={<SearchProducts/>} />
    <Route path="/product/:id" element={<Productdetails/>} />
    <Route path="/cart" element={<Carts/>} />
    <Route path="/address" element={<Address/>} />
   
    </Route>  
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/  >
  </React.StrictMode>,
)
