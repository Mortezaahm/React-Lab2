import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import Home from "../pages/Home"
import Products from "../pages/Products"
import ProductDetails from "../pages/ProductDetails"
import AddProduct from "../pages/AddProduct"
import EditProduct from "../pages/EditProduct"

function AppRouter() {

    return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/products" element= {<Products />} />
        <Route path="/products/:id" element= {<ProductDetails />} />
        <Route path="/add-product" element= {<AddProduct />} />
        <Route path="/edit-product/:id" element= {<EditProduct />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter
